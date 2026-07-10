import { getAbout } from "../api/about";
import { getMaintenance } from "../api/maintenance";
import { getProjects } from "../api/project";
import { getServices } from "../api/service";
import { getSkills } from "../api/skill";
import { getStatistics } from "../api/statistic";
import { BOOTSTRAP_STATUS } from "../config/constants";

export async function bootstrapApplication() {
  try {
    // Step 1
    // Check Maintenance

    const maintenanceResponse = await getMaintenance();

    const maintenance =
      Array.isArray(maintenanceResponse.data)
        ? maintenanceResponse.data[0]
        : maintenanceResponse.data;

    if (maintenance?.is_active) {
      return {
        status: "maintenance",
        maintenance,
      };
    }

    // Step 2
    // Load Portfolio

    const [
      about,
      services,
      projects,
      skills,
      statistics,
    ] = await Promise.all([
      getAbout(),
      getServices(),
      getProjects(),
      getSkills(),
      getStatistics(),
    ]);

    return {
      status: BOOTSTRAP_STATUS.READY,

      data: {
        about: about.data,
        services: services.data,
        projects: projects.data,
        skills: skills.data,
        statistics: statistics.data,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      status: BOOTSTRAP_STATUS.SERVER_DOWN,
    };
  }
}