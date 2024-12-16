const AlbumDisplay = () => {
  return (
    <div className='bg-baseColor h-screen p-14'>
      <h1 className='text-textColor'>アルバム</h1>
      <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
        <div className='overflow-hidden'>
          <img
            src='./src/assets/ruri.png'
            alt='写真1'
            className='rounded-3xl w-full'
          />
          <div className='p-2 bg-gray-100'>2024年12月11日（水）[神戸旅行]</div>
          <input type='date' />
        </div>
        <div className='overflow-hidden'>
          <img
            src='./src/assets/ruri.png'
            alt='写真2'
            className='rounded-3xl w-full'
          />
          <div className='p-2 bg-gray-100 text-center'>写真2のキャプション</div>
        </div>
        <div className='rounded-3xl overflow-hidden'>
          <img
            src='./src/assets/ruri.png'
            alt='写真3'
            className='rounded-3xl w-full'
          />
          <div className='p-2 bg-gray-100 text-center'>写真3のキャプション</div>
        </div>
      </div>
    </div>
  );
};

export default AlbumDisplay;
