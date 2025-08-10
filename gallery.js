function openImage(e) {
  const image = e.target.src;

  const container = document.createElement('div');
  container.id = 'large-image-container';
  Object.assign(container.style, {
    position: 'fixed',
    zIndex: '9999',
    paddingTop: '60px',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.8)',
    textAlign: 'center'
  });

  const closeBtn = document.createElement('span');
  closeBtn.innerHTML = '&times;';
  Object.assign(closeBtn.style, {
    position: 'absolute',
    top: '15px',
    right: '25px',
    color: 'white',
    fontSize: '35px',
    fontWeight: 'bold',
    cursor: 'pointer'
  });
  closeBtn.onclick = () => document.getElementById('large-image-container').remove();

  const img = document.createElement('img');
  img.id = 'large-image';
  img.src = image;
  Object.assign(img.style, {
    maxWidth: '90%',
    maxHeight: '80%',
    borderRadius: '8px',
    margin: 'auto',
    display: 'block'
  });

  container.appendChild(closeBtn);
  container.appendChild(img);
  document.body.appendChild(container);

  container.addEventListener('click', (e) => {
    if (e.target === container) document.getElementById('large-image-container').remove();
  });
}
