export interface WeightLossCommitment {
    id: string;
    currentWeight: number;
    currentHeight: number;
    targetWeight: number;
    daysToAchieve: number;
    startDay: Date;
    reportingDays: string[];
    userId: string;
    successfulPeriods: number;
    unsuccessfulPeriods: number;
}

// 画面表示用のインターフェース
export interface WeightLossCommitmentView {
    id: string;
    currentWeight: number;
    targetWeight: number;
    weeksToAchieve: number;
    progressPercentage: number;
    nextReportDate: Date;
    successfulPeriods: number;
    unsuccessfulPeriods: number;
}

// データ変換関数
export function transformToViewModel(commitment: WeightLossCommitment): WeightLossCommitmentView {
    const weeksToAchieve = Math.ceil(commitment.daysToAchieve / 7);
    const progressPercentage = Math.ceil((1 / weeksToAchieve) * 100); // 例として1週目の進捗を計算
    const nextReportDate = new Date(commitment.startDay);
    nextReportDate.setDate(nextReportDate.getDate() + 7); // 次のレポート日を1週間後に設定

    return {
        id: commitment.id,
        currentWeight: commitment.currentWeight,
        targetWeight: commitment.targetWeight,
        weeksToAchieve,
        progressPercentage,
        nextReportDate: nextReportDate,
        successfulPeriods: commitment.successfulPeriods,
        unsuccessfulPeriods: commitment.unsuccessfulPeriods,
    };
}