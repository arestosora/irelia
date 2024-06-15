import type { ArrayString } from '@skyra/env-utilities';
import { PrismaClient } from '@prisma/client';

declare module '@skyra/env-utilities' {
	interface Env {
		OWNERS: ArrayString;
	}
}

declare module '@sapphire/pieces' {
	interface Container {
		prisma: PrismaClient;
	}
}
