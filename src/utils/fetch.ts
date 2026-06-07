export const customFetch = async (
  path: string,
  authorization?: string,
  method: string = "GET",
  body: any = null,
): Promise<any> => {
  const apiKey =
    authorization || process.env.INVEZGO_API_KEY || process.env.API_KEY;

  if (!apiKey) {
    throw new Response(
      JSON.stringify(
        {
          error: true,
          status: 401,
          statusText: "Unauthorized",
          path,
          method,
          message:
            "INVEZGO_API_KEY is required. Set it in your MCPB user configuration or environment.",
        },
        null,
        2,
      ),
      {
        status: 401,
        headers: { "content-type": "application/json" },
      },
    );
  }

  try {
    const response = await fetch(`https://api.invezgo.com/${path}`, {
      headers: {
        accept: "application/json",
        "accept-language": "id",
        authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
        Referer: "https://invezgo.com/",
      },
      body: body ? JSON.stringify(body) : null,
      method: method,
    });

    const isJson =
      response.headers.get("content-type")?.includes("application/json") ??
      false;

    if (!response.ok) {
      let errorBody: any = null;
      try {
        errorBody = isJson ? await response.json() : await response.text();
      } catch {
        // ignore body parsing error
      }

      const payload = {
        error: true,
        status: response.status,
        statusText: response.statusText,
        path,
        method,
        message:
          typeof errorBody === "string"
            ? errorBody
            : errorBody?.message || "Request failed",
        details: typeof errorBody === "string" ? undefined : errorBody,
      };

      throw new Response(JSON.stringify(payload, null, 2), {
        status: response.status,
        headers: { "content-type": "application/json" },
      });
    }

    return isJson ? await response.json() : await response.text();
  } catch (err: any) {
    if (err instanceof Response) {
      throw err;
    }

    const payload = {
      error: true,
      status: 502,
      statusText: "Bad Gateway",
      path,
      method,
      message: err?.message || "Network error",
    };

    throw new Response(JSON.stringify(payload, null, 2), {
      status: 502,
      headers: { "content-type": "application/json" },
    });
  }
};
