export interface VehicleItem {
  id: number;
  vehicle_name: string;
}

export interface VehiclesList extends Array<VehicleItem> {}
