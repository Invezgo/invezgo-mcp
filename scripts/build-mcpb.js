const { cpSync, existsSync, mkdirSync, rmSync } = require("node:fs");
const { join, resolve } = require("node:path");
const { execSync } = require("node:child_process");

const root = resolve(__dirname, "..");
const staging = join(root, "build", "mcpb");
const output = join(root, "invezgo-mcp.mcpb");

rmSync(staging, { recursive: true, force: true });
mkdirSync(staging, { recursive: true });

for (const entry of [
  "manifest.json",
  "package.json",
  "icon.png",
  "dist",
  "README.md",
  "LICENSE",
  "CHANGELOG.md",
]) {
  const from = join(root, entry);
  if (!existsSync(from)) {
    throw new Error(`Required build artifact missing: ${entry}`);
  }
  cpSync(from, join(staging, entry), { recursive: true });
}

console.log("Installing production dependencies in MCPB staging directory...");
execSync("npm install --omit=dev --ignore-scripts --no-audit --no-fund", {
  cwd: staging,
  stdio: "inherit",
  shell: true,
});

console.log("Packing MCPB...");
execSync(`npx @anthropic-ai/mcpb pack "${staging}" "${output}"`, {
  cwd: root,
  stdio: "inherit",
  shell: true,
});
