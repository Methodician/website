import * as configcat from "configcat-js-ssr";
import { getOrSetCookieId } from "$lib/components/segment.svelte";

const configCatClient = configcat.getClient(
  "OSzbCCd5YESN3ZtcqYIpkA/n8MSGCfKLUC2OcnKX0i2ZQ",
  configcat.PollingMode.LazyLoad,
  {
    cacheTimeToLiveSeconds: 3 * 60,
    requestTimeoutMs: 2000,
    logger: configcat.createConsoleLogger(configcat.LogLevel.Error),
  }
);
const userId = getOrSetCookieId();

type GetFeatureFlagDone = {
  (flagValue: boolean): void;
};

// getFeatureFlag function retrieves the value of a feature flag from the ConfigCat API.

export const getFeatureFlag = (
  flagName: string,
  defaultValue: boolean,
  done: GetFeatureFlagDone
): boolean => {
  configCatClient
    .getValueAsync(flagName, defaultValue, new configcat.User(userId))
    .then(done)
    .catch((error) => {
      console.error(error);
    });

  // return the default value until the feature flag value is fetched
  return defaultValue;
};
