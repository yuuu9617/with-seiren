export default function Page() {
  return (
    <div className="space-y-6 p-4 bg-white shadow-md rounded">
      <h1 className="text-xl font-bold text-gray-900 mb-4">減量</h1>
      <form action="/commitment/weight-loss/create" method="post">
        <div className="flex items-center mb-4">
          <label htmlFor="current-weight" className="text-sm font-medium text-gray-700 mr-4 w-64">今の体重</label>
          <input type="text" id="current-weight" name="current-weight" required className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <span className="text-sm font-medium text-gray-700 ml-2">kg</span>
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="current-height" className="text-sm font-medium text-gray-700 mr-4 w-64">今の身長</label>
          <input type="text" id="current-height" name="current-height" required className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <span className="text-sm font-medium text-gray-700 ml-2">cm</span>
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="target-weight" className="text-sm font-medium text-gray-700 mr-4 w-64">目標体重</label>
          <input type="text" id="target-weight" name="target-weight" required className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <span className="text-sm font-medium text-gray-700 ml-2">kg</span>
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="duration-weeks" className="text-sm font-medium text-gray-700 mr-4 w-64">目標体重に達するまでの期間</label>
          <input type="number" id="duration-weeks" name="duration-weeks" required className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <span className="text-sm font-medium text-gray-700 ml-2">週</span>
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="start-date" className="text-sm font-medium text-gray-700 mr-4 w-64">開始日</label>
          <input type="date" id="start-date" name="start-date" required defaultValue={new Date().toISOString().split('T')[0]} className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>

        <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">次へ</button>
      </form>
    </div>
  );
}
