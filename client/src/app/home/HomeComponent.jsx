import Button from "../components/Button";


function HomeComponent({user}) {
  return (
    <div className="p-8 bg-indigo-100 w-full">
          <p>Bienvenido nuevamente {user.userData.userName}!</p>     
          <div>En este espacio vamos a mostrar el dashboard</div>
          <Button btnText="Crear un Equipo" />
    </div>
  );
}

export default HomeComponent