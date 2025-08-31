import type { ComponentType } from 'react';
import type { Phase } from '@/types';

type PRODUCTION_PHASE = 'PRODUCTION';

type OTHER_PHASE = 'DELIVERY_1' | 'DELIVERY_2' | 'TESTING' | 'USER_TESTING';

export type PhaseStatus =
  | 'NOT_STARTED'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'DELAYED';

export type PhaseInfo = {
  phase: Phase;
  phaseName: string;
  icon: ComponentType<{ className: string }>;
  description: string;
};

type AppVersionProductionPhase = {
  phase: PRODUCTION_PHASE;
  status: PhaseStatus;
  releaseDate: string;
  delayedReleaseDate?: string;
};

type AppVersionOtherPhase = {
  phase: OTHER_PHASE;
  status: PhaseStatus;
  startDate: string;
  endDate: string;
  causesProductionDelay?: boolean;
};

export type AppVersionPhase = AppVersionOtherPhase | AppVersionProductionPhase;

export type AppVersion = {
  id: string;
  version: string;
  phases: AppVersionPhase[];
};
