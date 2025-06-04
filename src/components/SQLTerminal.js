// components/SQLTerminal/index.js
'use client';
import { useState, useEffect } from 'react';
import styles from './SQLTerminal.module.css';

export default function SQLTerminal({ level, onExecute }) {
  const [query, setQuery] = useState('');
  const [history, setHistory] = useState([]);
  const [currentResult, setCurrentResult] = useState(null);
  const [isExecuting, setIsExecuting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsExecuting(true);
    try {
      const result = await onExecute(query);
      setHistory(prev => [...prev, { query, result }]);
      setCurrentResult(result);
    } catch (error) {
      setHistory(prev => [...prev, { query, result: { error: error.message } }]);
      setCurrentResult({ error: error.message });
    } finally {
      setIsExecuting(false);
      setQuery('');
    }
  };
  
  // Efeitos para animações
  useEffect(() => {
    // Efeitos visuais podem ser adicionados aqui
  }, [currentResult]);

  return (
    <div className={styles.container}>
      <div className={styles.visualizationPane}>
        <VisualizationComponent result={currentResult} level={level} />
      </div>
      
      <div className={styles.terminalPane}>
        <div className={styles.history}>
          {history.map((entry, i) => (
            <HistoryEntry key={i} entry={entry} />
          ))}
        </div>
        
        <form onSubmit={handleSubmit} className={styles.inputContainer}>
          <div className={styles.prompt}>SQL&gt;</div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isExecuting}
            className={styles.inputField}
          />
          <button 
            type="submit" 
            disabled={isExecuting}
            className={styles.executeButton}
          >
            {isExecuting ? 'Executando...' : 'Executar'}
          </button>
        </form>
        
        {level.hint && <div className={styles.hintBox}>{level.hint}</div>}
      </div>
    </div>
  );
}

const HistoryEntry = ({ entry }) => (
  <div className={`${styles.historyEntry} ${entry.result.error ? styles.error : ''}`}>
    <div className={styles.query}>
      <span className={styles.prompt}>SQL&gt;</span>
      <code>{entry.query}</code>
    </div>
    <div className={styles.result}>
      {entry.result.error ? (
        <span className={styles.errorMessage}>Erro: {entry.result.error}</span>
      ) : (
        <pre>{JSON.stringify(entry.result.data, null, 2)}</pre>
      )}
    </div>
  </div>
);

const VisualizationComponent = ({ result, level }) => {
  if (!result) return (
    <div className={styles.defaultVisualization}>
      <h3>{level.title}</h3>
      <p>{level.description}</p>
    </div>
  );

  if (result.error) return (
    <div className={styles.errorVisualization}>
      <div className={styles.errorIcon}>⚠️</div>
      <p>{result.error}</p>
    </div>
  );

  // Renderização condicional baseada no tipo de resultado
  return (
    <div className={styles.resultVisualization}>
      {result.data?.map(item => (
        <div key={item.id} className={styles.itemCard}>
          {item.image && <img src={`/assets/${item.image}`} alt={item.name} />}
          <h4>{item.name}</h4>
          <p>Tipo: {item.type}</p>
          {item.power && <p>Poder: {item.power}</p>}
        </div>
      ))}
    </div>
  );
};