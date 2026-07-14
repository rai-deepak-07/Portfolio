
import { getConfiguration } from "../api/configuration";
import { getStatistics } from "../api/statistic";
import { getServices } from "../api/service";
import { getTechnologies } from "../api/technology";
import { getFAQs } from "../api/faqs";
import { getMaintenance } from "../api/maintenance";
import { getFeaturedProjects, getHomeProjects } from "../api/project";

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

    if (maintenance) {
      return {
        status: "maintenance",
        maintenance,
      };
    }

    // Step 2
    // Load Portfolio

    const [
      configuration,
      statistics,
      services,
      technologies,
      faqs,
      featuredProjects,
      homeProjects,

    ] = await Promise.all([
      getConfiguration(),
      getStatistics(),
      getServices(),
      getTechnologies(),
      getFAQs(),
      getFeaturedProjects(),
      getHomeProjects(),
    ]);

    return {
      status: BOOTSTRAP_STATUS.READY,

      data: {
        configuration: configuration.data,
        statistics: statistics.data,
        services: services.data,
        technologies: technologies.data,
        faqs: faqs.data,
        featuredProjects: featuredProjects.data,
        homeProjects: homeProjects.data,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      status: BOOTSTRAP_STATUS.SERVER_DOWN,
    };
  }
}