import { HandlerReturnType } from "@/types/common";
import { encode } from "@toon-format/toon";

export const formatResponse = (response: unknown): HandlerReturnType => ({
  content: [
    {
      type: "text" as const,
      text: encode(response),
    },
  ],
});
