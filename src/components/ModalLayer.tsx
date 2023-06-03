import React from "react";

class ModalLayer extends React.Component {
  static modalLayerRef: React.RefObject<Component> = React.createRef();
  static show = (dialog: JSX.Element) => {
    ModalLayer.modalLayerRef.current?.show(dialog);
  };
  static hide = () => {
    ModalLayer.modalLayerRef.current?.hide();
  };
  static dispose = () => {
    ModalLayer.modalLayerRef.current?.dispose();
  };
  render() {
    return <Component ref={ModalLayer.modalLayerRef} />;
  }
}

class Component extends React.Component<{}, { visible: boolean }> {
  dialog: JSX.Element = (<></>);
  constructor(props: {}) {
    super(props);
    this.state = { visible: false };
  }
  show = (dialog: JSX.Element) => {
    this.dialog = dialog;
    this.setState({
      visible: true,
    });
  };
  hide = () => {
    this.setState({ visible: false });
  };
  dispose = () => {
    this.setState({ visible: false });
    this.dialog = <></>;
  };
  render() {
    return (
      <div
        className="ModalLayer"
        style={{ visibility: !this.state.visible ? "hidden" : "inherit" }}
      >
        {this.dialog}
      </div>
    );
  }
}

export default ModalLayer;
