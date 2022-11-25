const ModalInFunc=(props) =>{
  return (
    <>
          <div>
            <div className="overlay"></div>
            <div className="modal">
                <h1>{props.title}</h1>
                <button onClick={()=>props.setModalIsOpenToFalse()}>{props.buttontxt}</button>
            </div>
        </div>
    </>
  );
}
export default ModalInFunc;
