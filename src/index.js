const category = document.querySelector('#category'),
menu = document.querySelector('#menu')

category.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden')
  } else {
    menu.classList.add('hidden')
  }
})

const updateQuantity = (event) => {
  const operation = event.target.getAttribute('operation'),
  quantity = document.querySelector("#quantity")
  console.log(operation)
  if (operation === "reduce") {
    if (quantity.value != 0) quantity.value = quantity.value - 1
  } else {
    quantity.value = parseInt(quantity.value) + 1
  }
}

const toggleLikeButton = (event) => {
  const likeButton = event.target
  if (likeButton.classList.contains('text-red-300')) {
    likeButton.classList.remove('text-red-300')
  } else {
    likeButton.classList.add('text-red-300')
  }
}

const toggleCommentWrapper = (event) => {
  const comment = event.target,
  commentWrapper = document.getElementById(comment.getAttribute('wrapper'))
  if (commentWrapper) {
    if (commentWrapper.classList.contains('hidden')) {
      commentWrapper.classList.remove('hidden')
      if (!comment.classList.contains('text-red-300')) {
        comment.classList.add('text-red-300')
      }
    } else {
      commentWrapper.classList.add('hidden')
      if (comment.classList.contains('text-red-300')) {
        comment.classList.remove('text-red-300')
      }
    }
  }
}