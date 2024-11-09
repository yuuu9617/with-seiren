import { api } from '~/trpc/server';
import { format } from 'date-fns';

interface CommitmentDetailProps {
    params: {
        id: string;
    };
}

export default async function Page({ params }: CommitmentDetailProps) {
    const { id } = params;

    const commitment = await api.commitments.getById({id})

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg flex">
            <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">減量プロジェクト</h1>
                <div className="mb-4">
                    <div className="text-sm">Week 1 of {commitment.weeksToAchieve}</div>
                    <div className="w-full bg-gray-300 h-2 rounded">
                        <div className="bg-purple-600 h-2 rounded" style={{ width: `${commitment.progressPercentage}%` }}></div>
                    </div>
                </div>
                <p className="mb-2">私は、以下の目標を達成します：</p>
                <p className="font-semibold">{commitment.weeksToAchieve}週間で{commitment.currentWeight - commitment.targetWeight}キロ減量</p>
                <div className="mt-4">
                    <p>目標達成回数：</p><span data-testid="successfulPeriods">{commitment.successfulPeriods}</span>
                    <p>目標未達回数：</p><span data-testid="unsuccessfulPeriods">{commitment.unsuccessfulPeriods}</span>
                </div>
            </div>
            <div className="flex-1 bg-yellow-100 p-4 rounded-lg ml-4">
                <p className="text-lg font-bold">次のレポート期限:</p>
                <p className="text-2xl">{format(new Date(commitment.nextReportDate), 'MM月dd日')}</p>
                <p className="text-sm">午前12:00 JST</p>
                <p className="mt-4">今週の目標:</p>
                <p className="font-semibold">{commitment.targetWeight + 1} kg</p>
            </div>
        </div>
    );
}
