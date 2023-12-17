export const StatisticsSection = () => {
  return (
    <div className="container pb-12">
      <div className="flex flex-col md:flex-row w-full px-4">
        <div className="flex flex-col w-full md:w-1/3 lg:w-3/6">
          <span className="text-sm">Ecosystem TVL</span>
          <span className="text-4xl">123,234,532.123 $</span>
        </div>
        <div className="w-full md:w-2/3 lg:w-3/6 grid grid-cols-3 gap-y-8 gap-x-2">
          <div className="flex flex-col">
            <span className="text-sm">Treasury Assets</span>
            <span className="text-xl">123,234,532$</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm">$ALD Staked Ratio</span>
            <span className="text-xl">60%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm">$ALD Market Cap</span>
            <span className="text-xl">123,234,532 $</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm">Products build</span>
            <span className="text-xl">3</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm">$CVX Accumulated</span>
            <span className="text-xl">12345</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm">$ALD Market Cap</span>
            <span className="text-xl">123,234,532 $</span>
          </div>
        </div>
      </div>
    </div>
  );
};
