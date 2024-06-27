import { Component } from "react";
import { Link } from "react-router-dom";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error capturado:', error, errorInfo);
    // Registrar error a un servicio externo aquí si es necesario
    this.setState({ hasError: true, error: error, errorInfo: errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      const { error, errorInfo } = this.state;
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 max-h-screen">
          <div className="text-5xl text-gray-800 font-extrabold mb-4 mt-[-20%]">
            {error && error.status ? `Error ${error.status}` : "Error"}
          </div>
          <div className="text-xl text-gray-600 font-semibold mb-4 text-center">
            Se ha producido un error
          </div>
          {/* <div className="text-gray-600 mb-4 text-center">
            {errorInfo && errorInfo.componentStack.toString()}
          </div> */}
          <button
            onClick={this.handleRetry}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
          >
            Intentar de nuevo
          </button>
          <button
            onClick={this.handleReload}
            className="bg-gray-500 text-white px-4 py-2 rounded-md mb-4"
          >
            Recargar página
          </button>
          <Link to="/" className="text-blue-500 hover:underline">
            Volver a la página de inicio
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}
