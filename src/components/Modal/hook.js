import React from 'react';
import {useWindowDimensions} from 'react-native';
import DeleteOrder from './Components/DeleteOrder';
import DeclarePrice from 'components/Modal/Components/DeclarePrice';
import SmartServices from 'components/Modal/Components/SmartServices';
import BarCode from 'components/Modal/Components/BarCode';
import useTypedSelector from 'hooks/useTypedSelector';
import DeleteRecipient from 'components/Modal/Components/DeleteRecipient';
import LogOutModal from 'components/Modal/Components/Logout';
import Update from 'components/Modal/Components/Update';

interface IComponents {
  [key: string]: any;
}

function useContainer() {
  const {type, visible} = useTypedSelector(({modal}) => modal);
  const {width, height} = useWindowDimensions();
  const componentTypes: IComponents = {
    delete_order: <DeleteOrder />,
    delete_recipient: <DeleteRecipient />,
    declare_price: <DeclarePrice />,
    smart_services: <SmartServices />,
    barcode: <BarCode />,
    log_out: <LogOutModal />,
    update: <Update />,
  };

  return {type, visible, componentTypes, width, height};
}

export default useContainer;
