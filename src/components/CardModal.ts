class CardModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = `
        <style>
            .card {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                background-color: white;
                color: black;
                border-radius: 8px;
                border: 3px solid black;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 30vh;
                height: 15vh;
                margin: 0 auto;
            }
            .card-content {
                display: flex;
                justify-content: space-between;
                width: 100%;
            }
            .profile-picture {
                border: 3px solid black;
                border-radius: 50%;
                width: 70px;
                height: 70px;
                position: absolute;
                top: -40px;
                left: 20px;
                background-color: lightgrey;
            }
            .social-media {
                width: 70px;
                height: 20px;
                position: absolute;
                right: 20px;
                top: 10px;
            }
            .profile-details {
                text-align: left;
                padding-top: 40px;
                padding-left: 20px;
            }
            .profile-details h4 {
                margin-top: -20px;
            }
            .open-modal-button {
                background-color: grey;
                color: white;
                border: none;
                border-radius: 5px;
                padding-left: 15px;
                padding-right: 15px;
                cursor: pointer;
                height: 20px;
                position: absolute;
                bottom: -10px;
                right: -15px;
            }


            .modal-backdrop {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.8);
                display: none;
                justify-content: center;
                align-items: center;
            }
            .modal {
                background-color: white;
                color: black;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            .modal-backdrop.active {
                display: flex;
            }
        </style>

        <div class="card">
            <div class="card-content">
                <div class="profile-picture"></div>
                <div class="profile-details">
                    <h3>Full Name</h3>
                    <h4>Position</h4>
                </div>
                <div class="social-media">
                    &#9733; &#9733; &#9733;
                </div>
                <button class="open-modal-button" id="open-modal">Label</button>
            </div>
        </div>
        <div class="modal-backdrop" id="modal-backdrop">
            <div class="modal">
            <h2>Modal</h2>
            <p>Click 'Close' or press ESC to exit</p>
            <button id="close-modal">Close</button>
            </div>
        </div>
    `;

        this.shadowRoot!
            .querySelector("#open-modal")!
            .addEventListener("click", this.openModal.bind(this));
        this.shadowRoot!
            .querySelector("#close-modal")!
            .addEventListener("click", this.closeModal.bind(this));
        this.shadowRoot!
            .querySelector(".modal-backdrop")!
            .addEventListener("click", (this.handleBackdropClick as EventListener).bind(this));
        document.addEventListener("keydown", this.handleKeydown.bind(this));
    }

    openModal(): void {
        this.shadowRoot!.querySelector(".modal-backdrop")!.classList.add("active");
    }

    closeModal(): void {
        this.shadowRoot!.querySelector(".modal-backdrop")!.classList.remove("active");
    }

    handleBackdropClick(event: MouseEvent): void {
        if (event.target === this.shadowRoot!.querySelector(".modal-backdrop")) {
            this.closeModal();
        }
    }

    handleKeydown(event: KeyboardEvent): void {
        if (event.key === "Escape") {
            this.closeModal();
        }
    }
}

customElements.define("card-modal", CardModal);
