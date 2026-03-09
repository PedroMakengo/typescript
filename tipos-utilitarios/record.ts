type ButtonVariant = 'primary' | 'danger' | 'disable'

type ButtonStyle = {
  backgroundColor: string
  isEnabled: boolean
}

function getButtonStyle(variant: ButtonVariant): ButtonStyle {
  switch (variant) {
    case 'primary':
      return { backgroundColor: '#8158f9', isEnabled: true }
    case 'danger':
      return { backgroundColor: '#DC3545', isEnabled: true }
    case 'disable':
      return { backgroundColor: '#ccc', isEnabled: false }
    default:
      return { backgroundColor: '#fff', isEnabled: true }
  }
}

getButtonStyle('primary')

const buttonStyles: Record<ButtonVariant, ButtonStyle> = {
  primary: { backgroundColor: '#8158f9', isEnabled: true },
  danger: { backgroundColor: '#DC3545', isEnabled: true },
  disable: { backgroundColor: '#ccc', isEnabled: false },
}

function renderButton(title: string, variant: ButtonVariant) {
  const button = buttonStyles[variant]
}
