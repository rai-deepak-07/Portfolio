import { useEffect } from "react";

import { bootstrapApplication } from "../services/bootstrap";

export default function useBootstrap(callback) {
  useEffect(() => {
    let mounted = true;

    async function initialize() {
      const result = await bootstrapApplication();

      if (mounted) {
        callback(result);
      }
    }

    initialize();

    return () => {
      mounted = false;
    };
  }, [callback]);
}