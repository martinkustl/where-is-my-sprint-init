import * as z from 'zod';

export const appVersionFormField = {
  appVersion: 'appVersion',
  sprintOneDateRange: 'sprintOneDateRange',
  sprintOneStatus: 'sprintOneStatus',
  sprintTwoDateRange: 'sprintTwoDateRange',
  sprintTwoStatus: 'sprintTwoStatus',
  sprintTestDateRange: 'sprintTestDateRange',
  sprintTestStatus: 'sprintTestStatus',
  sprintUserTestingDateRange: 'sprintUserTestingDateRange',
  sprintUserTestingStatus: 'sprintUserTestingStatus',
  releaseDate: 'releaseDate',
  releaseStatus: 'releaseStatus',
  delayedReleaseDate: 'delayedReleaseDate',
} as const;

const dateRangeSchema = z.object({
  from: z.date(),
  to: z.date(),
});

const appPhaseStatus = z.enum([
  'NOT_STARTED',
  'IN_PROGRESS',
  'COMPLETED',
  'DELAYED',
]);

export const appVersionFormSchema = z.object({
  [appVersionFormField.appVersion]: z.string().min(1),
  [appVersionFormField.sprintOneDateRange]: dateRangeSchema,
  [appVersionFormField.sprintOneStatus]: appPhaseStatus,
  [appVersionFormField.sprintTwoDateRange]: dateRangeSchema,
  [appVersionFormField.sprintTwoStatus]: appPhaseStatus,
  [appVersionFormField.sprintTestDateRange]: dateRangeSchema,
  [appVersionFormField.sprintTestStatus]: appPhaseStatus,
  [appVersionFormField.sprintUserTestingDateRange]: dateRangeSchema,
  [appVersionFormField.sprintUserTestingStatus]: appPhaseStatus,
  [appVersionFormField.releaseDate]: z.date(),
  [appVersionFormField.releaseStatus]: appPhaseStatus,
  [appVersionFormField.delayedReleaseDate]: z.date().optional(),
});

export type AppVersionFormSchema = z.infer<typeof appVersionFormSchema>;
