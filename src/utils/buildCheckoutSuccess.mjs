
export default function buildCheckoutSuccess() {
    const cartCheckoutBody = document.getElementById('cart-checkout-body')

    const body = document.createElement('div')
    const title = document.createElement('h2')
    const description = document.createElement('p')

    body.classList = 'checkout-successful decoration-div-2'
    title.textContent = 'Checkout successful!'
    description.textContent = `We sent you the game key to your Email, if the email doesn't arrive withing 2 minutes contact our support!`

    body.append(title, description)


    cartCheckoutBody.replaceChildren()
    cartCheckoutBody.append(body)
}