import React, { Component } from "react";

export default class ISAIAS extends Component {
    render() {
        return (
            <form>
                <h3>¿Ya tienes una cuenta? Entra</h3>

                <div className="form-group">
                    <label>Correo</label>
                    <input type="email" className="form-control" placeholder="Digita tu correo" />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Digita tu contraseña" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Permanecer</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Enviar</button>
                <p className="forgot-password text-right">
                    Olvidaste tu <a href="#">contraseña :c?</a>
                </p>
            </form>
        );
    }
}
