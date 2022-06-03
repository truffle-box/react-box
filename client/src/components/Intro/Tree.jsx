function Tree() {
  return (
    <code>
      {`.\n`}
      {`├── client`}
      <span className="primary-color">
        {`   # React project (create-react-app)\n`}
      </span>
      {`└── truffle`}
      <span className="primary-color">
        {`  # Truffle project`}
      </span>
    </code>
  );
}

export default Tree;
