import { allSkillsTicker } from '../data/portfolio';

export default function SkillsTicker() {
  const items = [...allSkillsTicker, ...allSkillsTicker];

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        padding: '1.1rem 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Edge gradient masks */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(to right, #FFFFFF, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(to left, #FFFFFF, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <div className="ticker-track">
        {items.map((skill, index) => (
          <div
            key={index}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginRight: '2.5rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: index % 2 === 0 ? 'var(--text-primary)' : 'var(--text-muted)',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-pine)',
                display: 'inline-block',
              }}
            />
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
