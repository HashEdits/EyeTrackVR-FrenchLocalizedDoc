// notification example (different from mantine notification)
const notify = (title: string, body: string) => {
  new Notification(title, { body: body || '' })
}

export default notify
