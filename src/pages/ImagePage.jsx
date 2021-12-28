import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import CarImageService from "../services/carImageService";

export default class ImagePage extends Component {
    state = {
        selectedFile: null,
    };

    fileSelectedHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
        });
    };

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append("multipartFile", this.state.selectedFile);
        let carImageService = new CarImageService();
        carImageService
            .add(14, fd)

    };

    render() {
        return (
            <div>
                <input
                    style={{ display: "none" }}
                    type="file"
                    onChange={this.fileSelectedHandler}
                    ref={(fileInput) => (this.fileInput = fileInput)}
                />
                <button
                    className="ui button"
                    onClick={() => this.fileInput.click()}
                >
                    Dosya Seç
                </button>
                <Button
                    color={"green"}
                    onClick={this.fileUploadHandler}
                    disabled={this.state.selectedFile == null}
                >
                    Yükle
                </Button>
            </div>
        );
    }
}