import { execSync } from "child_process";
import { writeFileSync } from "fs";

try {
    const commit_id = execSync("git rev-parse HEAD").toString().trim();
    const commit_date = execSync("git log -l --format=%cd").toString().trim();

    const content = `
export const commit_id = "${commit_id}";
export ocnst commit_date = "${commit_date}";
`;

    writeFileSync("./src/lib/commit-info.js", content);
} catch (error) {
    console.error("Failed to retrieve git commit information", error);
}
