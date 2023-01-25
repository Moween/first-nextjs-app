
import pvcConcertImg from "../public/assets/pvcreg.jpg";
import excorpersImg from "../public/assets/excorpers.jpg";
import techGirlsimg from "../public/assets/techpoint-africa.jpg";
import oldGirlsImg from "../public/assets/oldgirlsevents.jpg";
import bibleReadersImg from "../public/assets/biblereaders.jpg";

export const DUMMY_MEETUPS = [
  { id: "m1", title: "pvc reg meetup", address: "Garki area 10", img: pvcConcertImg },
  {
    id: "m2",
    title: "old girls association meetup",
    address: "Area 5 Gado nasko Abuja, Nigeria ",
    img: oldGirlsImg
  },
  { id: "m3", title: "bible  readers meetup", address: "plot 5 Wuye", img: bibleReadersImg },
  { id: "m4", title: "africa tech girls meetup", address: " plot 86 Jami", img: techGirlsimg },
  { id: "m5", title: "ex-corpers meetup", address: " plot 86 Jami", img: excorpersImg },
];

export const tableColumns = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Asset',
    accessor: 'asset_name',
  },
  {
    Header: 'Roles',
    accessor: 'roles',
  }
]

export const tableData = [
  {
    id: 1,
    asset_name: "Zone 2: View",
    roles: "Admin Console - Zone 2",
  },
  {
    id: 2,
    asset_name: "Zone 2: View",
    roles: "Admin Console - Zone 2",
  },
  {
    id: 3,
    asset_name: "Zone 2: View",
    roles: "Admin Console - Zone 2",
  },
  {
    id: 4,
    asset_name: "Zone 2: View",
    roles: "Admin Console - Zone 2",
  },
  {
    id: 5,
    asset_name: "Zone 2: View",
    roles: "Admin Console - Zone 2",
  },
  {
    id: 6,
    asset_name: "Zone 2: View",
    roles: "Portal - Zone 2",
  },
  {
    id: 7,
    asset_name: "Zone 8: View",
    roles: "Admin Console - Zone 2",
  },
  {
    id: 8,
    asset_name: "Zone 2: View",
    roles: "Enrollment - Zone 2",
  },
  {
    id: 9,
    asset_name: "Zone 5: View",
    roles: "Admin Console - Zone 2",
  },
  {
    id: 10,
    asset_name: "Zone 2: View",
    roles: "Admin Console - Zone 2",
  },
];