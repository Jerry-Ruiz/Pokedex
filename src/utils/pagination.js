export const paginationLogic = (pokemonsFilter, currentPage) => {
    // Cantidad de pokemons por pagina
    const pokemonsPerPage = 12;

    // Pokemons que se van a mostrar en la pagina actual
    const sliceStart = (currentPage - 1) * pokemonsPerPage
    const sliceEnd = sliceStart + pokemonsPerPage
    const pokemonsInPage = pokemonsFilter.slice(sliceStart, sliceEnd)

    // Ultima pagina
    const lastPage = Math.ceil(pokemonsFilter.length / pokemonsPerPage) || 1

    // Bloque actual
    const pagesPerBlock = 5
    const actualBlock = Math.ceil(currentPage / pagesPerBlock)

    // Paginas a mostrar en el bloque actual
    const pagesInBlock = []
    const minPage = (actualBlock * pagesPerBlock - pagesPerBlock) + 1
    const maxPage = actualBlock * pagesPerBlock
    for (let i = minPage; i <= maxPage; i++) {
      if (i <= lastPage) {
        pagesInBlock.push(i)
      }
    }

    return { pagesInBlock, lastPage, pokemonsInPage }
  }