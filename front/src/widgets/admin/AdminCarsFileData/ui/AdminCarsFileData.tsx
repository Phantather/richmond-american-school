import { useEffect, useLayoutEffect, useState } from 'react';

import { Empty, Segmented, Spin } from 'antd';

import { AdminCarsFilePriceDelete, AdminCarsFilePriceSave } from '~features/admin/AdminCarsFile';
import { FilePriceItem, useFilePrice, useSetFilePrice } from '~entities/shared/file-price/model';
import { useSetVehiclesList, useVehiclesList } from '~entities/shared/vehicles/model';
import { VehiclesSelector } from '~entities/shared/vehicles';
import { AdminCarsFilePriceTable } from '~entities/admin';
import { FileInfoItem, useFileInfo, useSetFileInfo } from '~entities/shared/file-info/model';
import { AdminCarsFileInfoTable } from '~entities/admin/AdminCarsFileInfo';
import { AdminCarsFileInfoSave } from '~features/admin/AdminCarsFile/ui/AdminCarsFileInfoSave';
import { AdminCarsFileInfoDelete } from '~features/admin/AdminCarsFile/ui/AdminCarsFileInfoDelete';
import { AdminCarsFilePriceTitle } from '~features/admin/AdminCarsFile/ui/AdminCarsFilePriceTitle';
import { AdminCarsFilePriceFile } from '~features/admin/AdminCarsFile/ui/AdminCarsFilePriceFile';
import { MainFileItem, useMainFile, useSetMainFile } from '~entities/shared/main-file/model';
import { AdminCarsMainFileTable } from '~entities/admin/AdminCarsMainFile';
import { AdminCarsMainFileSave } from '~features/admin/AdminCarsFile/ui/AdminCarsMainFileSave';
import { AdminCarsMainFileDelete } from '~features/admin/AdminCarsFile/ui/AdminCarsMainFileDelete';

export const AdminCarsFileData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [filePriceItem, setFilePriceItem] = useState<FilePriceItem | null>(null);
  const [fileInfoItem, setFileInfoItem] = useState<FileInfoItem | null>(null);
  const [mainFileItem, setMainFileItem] = useState<MainFileItem | null>(null);

  const [selectedSegment, setSelectedSegment] = useState('цены и рукрводства по машинам');
  const [selectedVehiclePrice, setSelectedVehiclePrice] = useState<number>(1);
  const [selectedVehicleInfo, setSelectedVehicleInfo] = useState<number>(1);

  const filePrice = useFilePrice();
  const setFilePrice = useSetFilePrice();

  const fileInfo = useFileInfo();
  const setFileInfo = useSetFileInfo();

  const mainFileList = useMainFile();
  const setMainFileList = useSetMainFile();

  const vehiclesList = useVehiclesList();
  const setVehiclesList = useSetVehiclesList();

  useEffect(() => {
    if (!vehiclesList) {
      setVehiclesList();
    }
  }, []);

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        if (!filePrice) {
          await setFilePrice({ id_vehicle: selectedVehiclePrice });
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedVehiclePrice]);

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        if (!fileInfo) {
          await setFileInfo({ id_vehicle: selectedVehicleInfo });
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedVehicleInfo]);

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        if (!mainFileList) {
          await setMainFileList();
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleVehicleChangePrice = (value: any) => {
    setSelectedVehiclePrice(value);
    setFilePrice({ id_vehicle: value });
  };

  const handleVehicleChangeInfo = (value: any) => {
    setSelectedVehicleInfo(value);
    setFileInfo({ id_vehicle: value });
  };

  const filePriceTableView = () => {
    if (filePrice?.data) {
      return (
        <AdminCarsFilePriceTable
          list={filePrice?.data || []}
          setFilePriceItem={setFilePriceItem}
          // editSlot={
          //   <AdminCarsFilePriceSave
          //     type="edit"
          //     filePriceItem={filePriceItem}
          //     reFetchFilePrice={setFilePrice}
          //     selectedVehicle={selectedVehiclePrice}
          //   />
          // }
          editTitleSlot={
            <AdminCarsFilePriceTitle
              filePriceItem={filePriceItem}
              reFetchFilePrice={setFilePrice}
              selectedVehicle={selectedVehiclePrice}
            />
          }
          editFileSlot={
            <AdminCarsFilePriceFile
              filePriceItem={filePriceItem}
              reFetchFilePrice={setFilePrice}
              selectedVehicle={selectedVehiclePrice}
            />
          }
          deleteSlot={
            <AdminCarsFilePriceDelete
              filePriceItem={filePriceItem}
              reFetchFilePrice={setFilePrice}
              selectedVehicle={selectedVehiclePrice}
            />
          }
        />
      );
    }

    return null;
  };

  const fileInfoTableView = () => {
    if (fileInfo?.data) {
      return (
        <AdminCarsFileInfoTable
          list={fileInfo?.data || []}
          setFileInfoItem={setFileInfoItem}
          editSlot={
            <AdminCarsFileInfoSave
              type="edit"
              fileInfoItem={fileInfoItem}
              reFetchFileInfo={setFileInfo}
              selectedVehicle={selectedVehicleInfo}
            />
          }
          deleteSlot={
            <AdminCarsFileInfoDelete
              fileInfoItem={fileInfoItem}
              reFetchFileInfo={setFileInfo}
              selectedVehicle={selectedVehicleInfo}
            />
          }
        />
      );
    }

    return null;
  };

  const mainFileTableView = () => {
    if (mainFileList?.result?.length) {
      return (
        <AdminCarsMainFileTable
          list={mainFileList?.result?.length ? mainFileList?.result : []}
          setMainFileItem={setMainFileItem}
          editSlot={
            <AdminCarsMainFileSave
              type="edit"
              mainFileItem={mainFileItem}
              reFetchMainFile={setMainFileList}
            />
          }
          // editTitleSlot={
          //   <AdminCarsFilePriceTitle
          //     filePriceItem={filePriceItem}
          //     reFetchFilePrice={setFilePrice}
          //     selectedVehicle={selectedVehiclePrice}
          //   />
          // }
          // editFileSlot={
          //   <AdminCarsFilePriceFile
          //     filePriceItem={filePriceItem}
          //     reFetchFilePrice={setFilePrice}
          //     selectedVehicle={selectedVehiclePrice}
          //   />
          // }
          deleteSlot={
            <AdminCarsMainFileDelete
              mainFileItem={mainFileItem}
              reFetchMainFile={setMainFileList}
            />
          }
        />
      );
    }

    return (
      <>
        <Empty className="w-1/2" />
      </>
    );
  };

  return (
    <div className="grid grid-cols-12">
      <Segmented
        options={[
          'цены и рукрводства по машинам',
          'брошюры по машинам',
          'общие руководства и брошюры',
        ]}
        value={selectedSegment}
        onChange={setSelectedSegment}
        className="col-span-12 w-[750px] mb-[20px]"
      />
      {selectedSegment === 'цены и рукрводства по машинам' && (
        <>
          <div className="col-span-12 flex gap-[20px]">
            <AdminCarsFilePriceSave
              type="add"
              reFetchFilePrice={setFilePrice}
              selectedVehicle={selectedVehiclePrice}
            />
            <VehiclesSelector
              defaultValue={selectedVehiclePrice}
              vehiclesList={vehiclesList}
              onChange={handleVehicleChangePrice}
              className="w-[300px]"
            />
          </div>
          <div className="col-span-12 grid gap-[40px]">
            <>
              {isLoading ? (
                <div className="col-span-12 flex justify-center items-center">
                  <Spin size="large"></Spin>
                </div>
              ) : (
                <>{filePriceTableView()}</>
              )}
            </>
          </div>
        </>
      )}
      {selectedSegment === 'брошюры по машинам' && (
        <>
          <div className="col-span-12 flex gap-[20px]">
            <AdminCarsFileInfoSave
              type="add"
              reFetchFileInfo={setFileInfo}
              selectedVehicle={selectedVehicleInfo}
            />
            <VehiclesSelector
              defaultValue={selectedVehicleInfo}
              vehiclesList={vehiclesList}
              onChange={handleVehicleChangeInfo}
              className="w-[300px]"
            />
          </div>
          <div className="col-span-12 grid gap-[40px]">
            <>
              {isLoading ? (
                <div className="col-span-12 flex justify-center items-center">
                  <Spin size="large"></Spin>
                </div>
              ) : (
                <>{fileInfoTableView()}</>
              )}
            </>
          </div>
        </>
      )}
      {selectedSegment === 'общие руководства и брошюры' && (
        <>
          <div className="col-span-12 flex gap-[20px]">
            <AdminCarsMainFileSave type="add" reFetchMainFile={setMainFileList} />
          </div>
          <div className="col-span-12 grid gap-[40px]">
            <>
              {isLoading ? (
                <div className="col-span-12 flex justify-center items-center">
                  <Spin size="large"></Spin>
                </div>
              ) : (
                <>{mainFileTableView()}</>
              )}
            </>
          </div>
        </>
      )}
    </div>
  );
};
