import PropTypes from 'prop-types';
import { useReducer, createContext, useContext } from 'react';
import { MODE_DOWNLOAD } from '@consts';

const EditorContext = createContext({});

export const CHANGE_MODE = 'CHANGE_MODE';
export const CHANGE_SIZE = 'CHANGE_SIZE';
export const CHANGE_RESOLUTION = 'CHANGE_RESOLUTION';
export const CHANGE_DESIGN = 'CHANGE_DESIGN';

function reducer(state, action) {
  switch (action.type) {
    case CHANGE_MODE:
      return { ...state, mode: action.payload };
    case CHANGE_SIZE:
      return { ...state, size: action.payload };
    case CHANGE_RESOLUTION:
      return { ...state, resolution: action.payload };
    case CHANGE_DESIGN:
      return { ...state, design: action.payload, mode: MODE_DOWNLOAD };
    default:
      throw new Error();
  }
}

function EditorProvider({ initialValue, children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const contextValue = [state, dispatch];

  return (
    <EditorContext.Provider value={contextValue}>
      {children}
    </EditorContext.Provider>
  );
}

EditorProvider.propTypes = {
  initialValue: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
};

function useEditorContext() {
  return useContext(EditorContext);
}

export { useEditorContext, EditorProvider };
