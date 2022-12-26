import notify from '@hooks/general/useNotification'

const Notifications = () => {
  return (
    <div className="notifications">
      <button onClick={() => notify('success', 'Success message')}>Success</button>
    </div>
  )
}

export default Notifications

// Path: src\components\Notifications\Notification.tsx
