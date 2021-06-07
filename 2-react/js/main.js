import store from '../js/Store';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: '',
      searchResult: []
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(e, this.state.searchKeyword);
  }

  handleChangeInput(e) {
    const searchKeyword = e.target.value;
    this.search(this.state.searchKeyword);

    if (searchKeyword.length <= 0) {
      return this.handleReset();
    }

    this.setState({
      searchKeyword
    });
  }

  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    this.setState({
      searchResult
    })
  }

  handleReset() {
    this.setState(
      () => {
        return { searchKeyword: '' };
      },
      () => {
        console.log('todo', this.state.searchKeyword);
      }
    );
  }

  // react element를 반환
  render() {
    return (
      <>
        <header>
          <h2 className='container'>검색</h2>
        </header>
        <div className='container'>
          <form
            onSubmit={e => this.handleSubmit(e)}
            onReset={() => this.handleReset()}
          >
            <input
              type='text'
              placeholder='검색어를 입력하세요'
              autoFocus
              value={this.state.searchKeyword}
              onChange={e => this.handleChangeInput(e)}
            />
            {this.state.searchKeyword.length > 0 && (
              <button type='reset' className='btn-reset' />
            )}
          </form>
          <div className='content'>
            {this.state.searchResult.length > 0 ? (
              <ul>
                {this.state.searchResult.map(item => {
                  return <li>
                    <img src={item.imageurl] />
                    <p>{item.name}</p>
                  </li>;
                })}
              </ul>
            ) : (
              <div className='empty-box'>검색 결과가 없습니다.</div>
            )}
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
