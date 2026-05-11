/* Filter accordion */
  function toggleFilter(heading){
    heading.classList.toggle('open');
    heading.nextElementSibling.classList.toggle('open');
  }

  /* Active filters */
  let activeFilters = [];
  function addFilter(label, link){
    if(activeFilters.includes(label)){ removeFilter(label); return; }
    activeFilters.push(label);
    link.classList.add('active');
    renderPills();
  }
  function removeFilter(label){
    activeFilters = activeFilters.filter(f=>f!==label);
    document.querySelectorAll('.filter-link').forEach(l=>{
      if(l.getAttribute('onclick') && l.getAttribute('onclick').includes(label)) l.classList.remove('active');
    });
    renderPills();
  }
  function renderPills(){
    const bar = document.getElementById('activeFilters');
    if(activeFilters.length===0){
      bar.innerHTML='<span style="font-size:11px;color:#999;">No filters applied — showing all items</span>';
      return;
    }
    bar.innerHTML = activeFilters.map(f=>
      `<span class="filter-pill">${f}<button onclick="removeFilter('${f}')">×</button></span>`
    ).join('') + `<a class="clear-all" onclick="clearAll()">Clear All</a>`;
  }
  function clearAll(){
    activeFilters=[];
    document.querySelectorAll('.filter-link').forEach(l=>l.classList.remove('active'));
    renderPills();
  }

  /* View toggle */
  function setView(mode){
    const grid = document.getElementById('productsGrid');
    const gb = document.getElementById('gridViewBtn');
    const lb = document.getElementById('listViewBtn');
    if(mode==='grid'){
      grid.classList.remove('list-view');
      gb.classList.add('active'); lb.classList.remove('active');
    } else {
      grid.classList.add('list-view');
      lb.classList.add('active'); gb.classList.remove('active');
    }
  }

  /* Pagination */
  function changePage(btn, page){
    document.querySelectorAll('.page-btn').forEach(b=>b.classList.remove('active'));
    if(typeof page==='number') btn.classList.add('active');
  }

  /* Add to cart */
  let cartCount=0;
  function addToCart(btn){
    cartCount++;
    document.getElementById('cartCount').textContent=cartCount;
    const orig = btn.innerHTML;
    btn.innerHTML='<i class="fa fa-check"></i> ADDED!';
    btn.style.background='#28a745';
    showToast('Item added to cart!');
    setTimeout(()=>{ btn.innerHTML=orig; btn.style.background=''; },1800);
  }

  function showToast(msg){
    const t=document.getElementById('toastMsg');
    document.getElementById('toastText').textContent=msg;
    t.classList.add('show');
    setTimeout(()=>t.classList.remove('show'),2800);
  }

  function changePerPage(v){ showToast('Showing '+v+' items per page'); }
