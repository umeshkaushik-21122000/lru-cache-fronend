"use client";
import GetDialog from '@/components/GetDialog';
import CustomTable from '@/components/CustomTable';
import DeleteDialog from '@/components/DeleteDialog';
import SetDialog from '@/components/SetDialog';
import { useEffect, useState } from 'react';

type DataItem = {
  key: number;
  value: number;
};


export default function Home() {
  const [data,setData]=useState<DataItem[]>([]);
  const [distVal,setDistVal]=useState<DataItem>();
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080/ws');

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      setData(parsedData);
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // Cleanup function
    return () => {
      socket.close();
    };
  }, []);
  return (
    <main className="flex flex-col items-center justify-around p-24 bg-black  h-full">
      <div className='text-white'>
      <table className="table table-striped">
      <thead>
        <tr>
          <th className='pl-5'>Key</th>
          <th className='pl-5'>Value</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td className='pl-5'>{distVal?.key}</td>
            <td className='pl-5'>{distVal?.value}</td>
          </tr>
      </tbody>
    </table>
      </div>
      <div className="flex space-x-2">
          <GetDialog setDistVal={setDistVal}  />
          <DeleteDialog />
          <SetDialog />
      </div>
      <div className="text-white mt-4 w-full pl-9">
        {data.length > 0 ? ( <CustomTable tableData={data} />
        ) : (
          <p>No data available</p>
        )}
      </div>
    </main>
  );
}