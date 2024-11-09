import { transformToViewModel } from '../commitment-detail';
import { type WeightLossCommitment, type WeightLossCommitmentView } from '../commitment-detail';

test('transformToViewModel correctly transforms WeightLossCommitment to WeightLossCommitmentView', () => {
    const commitment: WeightLossCommitment = {
        id: 'cm3a45t2x000008mmh408ghun',
        currentWeight: 80,
        currentHeight: 175,
        targetWeight: 70,
        daysToAchieve: 42,
        startDay: new Date('2023-01-01'),
        reportingDays: ['MONDAY'],
        userId: 'user_1',
        successfulPeriods: 2,
        unsuccessfulPeriods: 1,
    };

    const expected: WeightLossCommitmentView = {
        id: 'cm3a45t2x000008mmh408ghun',
        currentWeight: 80,
        targetWeight: 70,
        weeksToAchieve: 6,
        progressPercentage: 17,
        nextReportDate: new Date('2023-01-08'),
        successfulPeriods: 2,
        unsuccessfulPeriods: 1,
    };

    const target = transformToViewModel(commitment);

    expect(target).toEqual(expected);
}); 