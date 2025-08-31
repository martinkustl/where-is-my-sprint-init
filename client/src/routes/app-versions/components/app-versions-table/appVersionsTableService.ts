import type { AppVersion } from '@/client/index';

export function hasProductionDelay(appVersion: AppVersion): boolean {
  return !!appVersion.phases.production.delayedReleaseDate;
}
