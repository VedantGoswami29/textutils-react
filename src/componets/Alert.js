function Alert(props) {
    const closeAlert = () => {
        props.setAlert(null);
    }
    return (
        <>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.message}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={closeAlert}></button>
            </div>}
        </>
    )
}

export default Alert;