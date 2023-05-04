import React from "react";
import ModalLayer from "components/ModalLayer";
import MessageDialog from "components/MessageDialog";

class OptionPane {
  static showMessage = (message: string, title: string = "Message") => {
    ModalLayer.show(<MessageDialog message={message} title={title} />);
  };
}

export default OptionPane;
