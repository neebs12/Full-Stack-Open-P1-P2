const Notification = ({ message, isError }) => {
  if (message === null) return null;

  let messageType = isError ? "error" : "message"
  return <div className={messageType}>{message}</div>
}

export default Notification;