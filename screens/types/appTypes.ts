export interface vehicle_make {
  make: string;
}
export interface car_data_type {
  model: string;
  vehicle_make: vehicle_make;
  id: number;
  year: number;
}

export interface accordian_type {
  id: number;
  name: string;
  selected: boolean;
}
