class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: ''
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(e, this.state.searchKeyword);
  }

  handleChangeInput(e) {
    const searchKeyword = e.target.value;

    if (searchKeyword.length <= 0) {
      return this.handleReset();
    }

    this.setState({
      searchKeyword
    });
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
            onSubmit={(e) => this.handleSubmit(e)}
            onReset={() => this.handleReset()}
          >
            <input
              type='text'
              placeholder='검색어를 입력하세요'
              autoFocus
              value={this.state.searchKeyword}
              onChange={(e) => this.handleChangeInput(e)}
            />
            {this.state.searchKeyword.length > 0 && (
              <button type='reset' className='btn-reset' />
            )}
          </form>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
