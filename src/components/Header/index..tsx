import './styles.scss'

export const Header = () => {
  return (
    <header className="my-header">
      <div>
        <span>Inicio</span>
        <span>Contato</span>
        <span>Icon</span>
      </div>
      <div className="profile">
        <span>Perfil</span>
        <span></span>
      </div>
    </header>
  )
}