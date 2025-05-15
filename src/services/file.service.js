import path from "path";
import fs from "fs-extra";

export const updatePackageJson = async (projectPath, projectName) => {
    const packageJsonPath = path.join(projectPath, 'package.json');
    const packageJsonExists = fs.existsSync(packageJsonPath);

    if (!packageJsonExists) {
        return;
    }

    const packageJson = await fs.readJson(packageJsonPath);
    packageJson.name = projectName;

    await fs.writeJson(packageJsonPath, packageJson, {
        spaces: 2
    });
}