import { viewportSettingsType } from "./types"


export const viewportDelayDeterminate = (resolution: number, settings: viewportSettingsType) => {
    if (resolution > 1612) {
        return settings.default
    }
    if (resolution < 1612 && resolution > 1288) {
        return settings.less1612
    } else if (resolution <= 1288 && resolution > 966) {
        return settings.less1288
    } else if (resolution <= 966 && resolution > 644) {
        return settings.less966
    } else {
        return settings.less644
    }
}