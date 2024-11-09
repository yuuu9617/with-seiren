import { z } from "zod";
import { transformToViewModel } from "~/interfaces/commitment-detail";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const commitmentRouter = createTRPCRouter({
    getById: publicProcedure.input(z.object({ id: z.string() })).query(async ({ ctx, input }) => {
        const { id } = input;
        const weightLossCommitment = await ctx.db.weightLossCommitment.findUnique({ where: { id } });

        if (!weightLossCommitment) {
            throw new Error('Weight loss commitment not found');
        }

        const viewModel = transformToViewModel(weightLossCommitment);
        return viewModel;
    }),
});
