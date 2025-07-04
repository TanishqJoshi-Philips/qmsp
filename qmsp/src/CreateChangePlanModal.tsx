import React, { useState } from 'react';
import './CreateChangePlanModal.css';

/** --- Types --- */
interface SupportingDoc {
  id: string;
  version: string;
  repository: string;
  link: string;
}
interface ChangePlanDetailsData {
  planId: string;
  msQms: string;
  planType: string;
  description: string;
  reason: string;
  supportingDocs: SupportingDoc[];
  reviewRep: string;
}
interface ProcessRow {
  id: string;
  name: string;
  action: string;
  currentDeployType: string;
  proposedDeployType: string;
  localChangeId: string;
  status: string;
  owner: string;
  selected?: boolean;
}
interface CatalogDoc {
  id: string;
  name: string;
  version: string;
  type: string;
  action: string;
  status: string;
  editor: string;
  owner: string;
}
interface ActivityRow {
  activity: string;
  owner: string;
  comments: string;
  duration: string;
}

/** --- Step 1: Change Plan Details --- */
const ChangePlanDetailsForm: React.FC<{
  data: Partial<ChangePlanDetailsData>;
  onChange: (data: Partial<ChangePlanDetailsData>) => void;
}> = ({ data, onChange }) => {
  const [doc, setDoc] = useState<SupportingDoc>({
    id: '',
    version: '',
    repository: '',
    link: '',
  });

  const handleDocAdd = () => {
    if (doc.id && doc.version && doc.repository) {
      onChange({
        ...data,
        supportingDocs: [...(data.supportingDocs || []), doc],
      });
      setDoc({ id: '', version: '', repository: '', link: '' });
    }
  };

  const handleDocRemove = (idx: number) => {
    const updated = (data.supportingDocs || []).filter((_, i) => i !== idx);
    onChange({ ...data, supportingDocs: updated });
  };

  return (
    <div>
      <h2 className="step-title">Change Plan Details</h2>
      <label>
        Change Plan ID <span className="required">*</span>
        <input
          type="text"
          className="form-input"
          value={data.planId || ''}
          onChange={e => onChange({ ...data, planId: e.target.value })}
          required
        />
      </label>
      <label>
        MS-QMS <span className="required">*</span>
        <input
          type="text"
          className="form-input"
          value={data.msQms || ''}
          onChange={e => onChange({ ...data, msQms: e.target.value })}
          required
        />
      </label>
      <label>
        Change Plan Type <span className="required">*</span>
        <input
          type="text"
          className="form-input"
          value={data.planType || ''}
          onChange={e => onChange({ ...data, planType: e.target.value })}
          required
        />
      </label>
      <label>
        Change Plan Description <span className="required">*</span>
        <textarea
          name="description"
          className="form-textarea"
          required
          value={data.description || ''}
          onChange={e => onChange({ ...data, description: e.target.value })}
        />
      </label>
      <label>
        Reason for Change <span className="required">*</span>
        <textarea
          name="reason"
          className="form-textarea"
          required
          value={data.reason || ''}
          onChange={e => onChange({ ...data, reason: e.target.value })}
        />
      </label>
      <div className="form-section">
        <div style={{ fontWeight: 500, marginBottom: 8 }}>Supporting Documented Information</div>
        <div className="supporting-docs-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Version</th>
                <th>Repository</th>
                <th>Link</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {(data.supportingDocs || []).map((d, i) => (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.version}</td>
                  <td>{d.repository}</td>
                  <td>
                    {d.link ? (
                      <a href={d.link} target="_blank" rel="noopener noreferrer">
                        Link
                      </a>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td>
                    <button type="button" className="remove-doc-btn" onClick={() => handleDocRemove(i)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="ID"
                    value={doc.id}
                    onChange={e => setDoc({ ...doc, id: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Version"
                    value={doc.version}
                    onChange={e => setDoc({ ...doc, version: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Repository"
                    value={doc.repository}
                    onChange={e => setDoc({ ...doc, repository: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Link"
                    value={doc.link}
                    onChange={e => setDoc({ ...doc, link: e.target.value })}
                  />
                </td>
                <td>
                  <button type="button" className="add-doc-btn" onClick={handleDocAdd}>
                    Add
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <label>
        Change Review Team Representative <span className="required">*</span>
        <input
          type="text"
          className="form-input"
          value={data.reviewRep || ''}
          onChange={e => onChange({ ...data, reviewRep: e.target.value })}
          required
        />
      </label>
    </div>
  );
};

/** --- Step 2: Processes Table --- */
const ProcessesForm: React.FC<{
  data: { processes: ProcessRow[] };
  onChange: (data: { processes: ProcessRow[] }) => void;
}> = ({ data, onChange }) => {
  const [newRow, setNewRow] = useState<ProcessRow>({
    id: '',
    name: '',
    action: '',
    currentDeployType: '',
    proposedDeployType: '',
    localChangeId: '',
    status: '',
    owner: '',
    selected: false,
  });
  const processes = data.processes || [];

  const handleSelect = (idx: number) => {
    const updated = processes.map((row, i) =>
      i === idx ? { ...row, selected: !row.selected } : row
    );
    onChange({ processes: updated });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRow({ ...newRow, [e.target.name]: e.target.value });
  };

  const handleAddRow = () => {
    if (newRow.id && newRow.name) {
      onChange({ processes: [...processes, newRow] });
      setNewRow({
        id: '',
        name: '',
        action: '',
        currentDeployType: '',
        proposedDeployType: '',
        localChangeId: '',
        status: '',
        owner: '',
        selected: false,
      });
    }
  };

  const handleRemoveRow = (idx: number) => {
    onChange({ processes: processes.filter((_, i) => i !== idx) });
  };

  return (
    <div>
      <h2 className="step-title">Processes</h2>
      <div className="processes-table-wrapper">
        <table className="processes-table">
          <thead>
            <tr>
              <th>Select</th>
              <th>Process ID and Name</th>
              <th>Process Action</th>
              <th>Current Deploy. Type</th>
              <th>Proposed Deploy. Type</th>
              <th>Local Change ID</th>
              <th>Status</th>
              <th>Owner</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {processes.map((row, idx) => (
              <tr key={idx}>
                <td>
                  <input
                    type="checkbox"
                    checked={!!row.selected}
                    onChange={() => handleSelect(idx)}
                  />
                </td>
                <td>{row.id} {row.name}</td>
                <td>{row.action}</td>
                <td>{row.currentDeployType}</td>
                <td>{row.proposedDeployType}</td>
                <td>{row.localChangeId}</td>
                <td>{row.status}</td>
                <td>{row.owner}</td>
                <td>
                  <button type="button" className="remove-doc-btn" onClick={() => handleRemoveRow(idx)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td />
              <td>
                <input name="id" value={newRow.id} onChange={handleInputChange} placeholder="Process ID" />
                <input name="name" value={newRow.name} onChange={handleInputChange} placeholder="Process Name" />
              </td>
              <td>
                <input name="action" value={newRow.action} onChange={handleInputChange} placeholder="Action" />
              </td>
              <td>
                <input name="currentDeployType" value={newRow.currentDeployType} onChange={handleInputChange} placeholder="Current Deploy Type" />
              </td>
              <td>
                <input name="proposedDeployType" value={newRow.proposedDeployType} onChange={handleInputChange} placeholder="Proposed Deploy Type" />
              </td>
              <td>
                <input name="localChangeId" value={newRow.localChangeId} onChange={handleInputChange} placeholder="Local Change ID" />
              </td>
              <td>
                <input name="status" value={newRow.status} onChange={handleInputChange} placeholder="Status" />
              </td>
              <td>
                <input name="owner" value={newRow.owner} onChange={handleInputChange} placeholder="Owner" />
              </td>
              <td>
                <button type="button" className="add-doc-btn" onClick={handleAddRow}>Add</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

/** --- Step 3: Catalog Documents Table --- */
const CatalogDocumentsForm: React.FC<{
  data: { docs: CatalogDoc[] };
  onChange: (data: { docs: CatalogDoc[] }) => void;
}> = ({ data, onChange }) => {
  const docs = data.docs || [];
  const [newDoc, setNewDoc] = useState<CatalogDoc>({
    id: '',
    name: '',
    version: '',
    type: '',
    action: '',
    status: '',
    editor: '',
    owner: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDoc({ ...newDoc, [e.target.name]: e.target.value });
  };

  const handleAddDoc = () => {
    if (newDoc.id && newDoc.name) {
      onChange({ docs: [...docs, newDoc] });
      setNewDoc({
        id: '',
        name: '',
        version: '',
        type: '',
        action: '',
        status: '',
        editor: '',
        owner: '',
      });
    }
  };

  const handleRemoveDoc = (idx: number) => {
    onChange({ docs: docs.filter((_, i) => i !== idx) });
  };

  return (
    <div>
      <h2 className="step-title">Catalog Documents</h2>
      <table className="catalog-table">
        <thead>
          <tr>
            <th>Doc. ID</th>
            <th>Doc. Name</th>
            <th>Doc. Version</th>
            <th>Type</th>
            <th>Doc. Action</th>
            <th>Status</th>
            <th>MS-QMS Content Editor</th>
            <th>MS-QMS Content Owner</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {docs.map((doc, idx) => (
            <tr key={idx}>
              <td>{doc.id}</td>
              <td>{doc.name}</td>
              <td>{doc.version}</td>
              <td>{doc.type}</td>
              <td>{doc.action}</td>
              <td>{doc.status}</td>
              <td>{doc.editor}</td>
              <td>{doc.owner}</td>
              <td>
                <button type="button" className="remove-doc-btn" onClick={() => handleRemoveDoc(idx)}>Remove</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input name="id" value={newDoc.id} onChange={handleInputChange} placeholder="Doc. ID" />
            </td>
            <td>
              <input name="name" value={newDoc.name} onChange={handleInputChange} placeholder="Doc. Name" />
            </td>
            <td>
              <input name="version" value={newDoc.version} onChange={handleInputChange} placeholder="Version" />
            </td>
            <td>
              <input name="type" value={newDoc.type} onChange={handleInputChange} placeholder="Type" />
            </td>
            <td>
              <input name="action" value={newDoc.action} onChange={handleInputChange} placeholder="Action" />
            </td>
            <td>
              <input name="status" value={newDoc.status} onChange={handleInputChange} placeholder="Status" />
            </td>
            <td>
              <input name="editor" value={newDoc.editor} onChange={handleInputChange} placeholder="Editor" />
            </td>
            <td>
              <input name="owner" value={newDoc.owner} onChange={handleInputChange} placeholder="Owner" />
            </td>
            <td>
              <button type="button" className="add-doc-btn" onClick={handleAddDoc}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

/** --- Step 4: Activities Table --- */
const ChangePlanActivitiesForm: React.FC<{
  data: { activities: ActivityRow[] };
  onChange: (data: { activities: ActivityRow[] }) => void;
}> = ({ data, onChange }) => {
  const activities = data.activities || [];
  const [newActivity, setNewActivity] = useState<ActivityRow>({
    activity: '',
    owner: '',
    comments: '',
    duration: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewActivity({ ...newActivity, [e.target.name]: e.target.value });
  };

  const handleAddActivity = () => {
    if (newActivity.activity) {
      onChange({ activities: [...activities, newActivity] });
      setNewActivity({ activity: '', owner: '', comments: '', duration: '' });
    }
  };

  const handleRemoveActivity = (idx: number) => {
    onChange({ activities: activities.filter((_, i) => i !== idx) });
  };

  const handleRowChange = (idx: number, field: keyof ActivityRow, value: string) => {
    const updated = activities.map((row, i) =>
      i === idx ? { ...row, [field]: value } : row
    );
    onChange({ activities: updated });
  };

  return (
    <div>
      <h2 className="step-title">Change Plan Activities</h2>
      <table className="activities-table">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Activity Owner</th>
            <th>Comments</th>
            <th>Duration (days)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {activities.map((row, idx) => (
            <tr key={idx}>
              <td>
                <input
                  type="text"
                  value={row.activity}
                  onChange={e => handleRowChange(idx, 'activity', e.target.value)}
                  placeholder="Activity"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.owner}
                  onChange={e => handleRowChange(idx, 'owner', e.target.value)}
                  placeholder="Owner"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.comments}
                  onChange={e => handleRowChange(idx, 'comments', e.target.value)}
                  placeholder="Comments"
                />
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  value={row.duration}
                  onChange={e => handleRowChange(idx, 'duration', e.target.value)}
                  placeholder="Days"
                  style={{ width: 60 }}
                />
              </td>
              <td>
                <button type="button" className="remove-activity-btn" onClick={() => handleRemoveActivity(idx)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                name="activity"
                value={newActivity.activity}
                onChange={handleInputChange}
                placeholder="New activity"
              />
            </td>
            <td>
              <input
                name="owner"
                value={newActivity.owner}
                onChange={handleInputChange}
                placeholder="Owner"
              />
            </td>
            <td>
              <input
                name="comments"
                value={newActivity.comments}
                onChange={handleInputChange}
                placeholder="Comments"
              />
            </td>
            <td>
              <input
                name="duration"
                type="number"
                min="0"
                value={newActivity.duration}
                onChange={handleInputChange}
                placeholder="Days"
                style={{ width: 60 }}
              />
            </td>
            <td>
              <button type="button" className="add-activity-btn" onClick={handleAddActivity}>
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

/** --- Modal Steps and Main Modal --- */
const steps = [
  { key: 'details', label: 'Change Plan Details', Component: ChangePlanDetailsForm },
  { key: 'processes', label: 'Processes', Component: ProcessesForm },
  { key: 'documents', label: 'Catalog Documents', Component: CatalogDocumentsForm },
  { key: 'activities', label: 'Change Plan Activities', Component: ChangePlanActivitiesForm },
];

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateChangePlanModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<any>({
    details: {},
    processes: {},
    documents: {},
    activities: {},
  });

  const StepComponent = steps[currentStep].Component;

  const handleStepData = (stepKey: string, data: any) => {
    setFormData((prev: any) => ({ ...prev, [stepKey]: data }));
  };

  const validateStep = () => {
    const data = formData[steps[currentStep].key];
    if (steps[currentStep].key === 'details') {
      return data.planId && data.msQms && data.planType && data.description && data.reason && data.reviewRep;
    }
    if (steps[currentStep].key === 'processes') {
      return data.processes && data.processes.some((p: ProcessRow) => p.selected);
    }
    if (steps[currentStep].key === 'documents') {
      return true; // optional
    }
    if (steps[currentStep].key === 'activities') {
      return data.activities && data.activities.length > 0;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep() && currentStep < steps.length - 1) setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      alert('Change plan submitted!\n' + JSON.stringify(formData, null, 2));
      onClose();
      setCurrentStep(0);
      setFormData({
        details: {},
        processes: {},
        documents: {},
        activities: {},
      });
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container multi-step">
        <aside className="modal-sidebar">
          <ol>
            {steps.map((step, idx) => (
              <li
                key={step.key}
                className={
                  currentStep === idx
                    ? 'active'
                    : idx < currentStep
                    ? 'completed'
                    : ''
                }
              >
                <span>{idx + 1}. {step.label}</span>
              </li>
            ))}
          </ol>
        </aside>
        <main className="modal-content">
          <StepComponent
            data={formData[steps[currentStep].key]}
            onChange={data => handleStepData(steps[currentStep].key, data)}
          />
          <div className="modal-footer">
            {currentStep > 0 && (
              <button type="button" className="btn-cancel" onClick={handleBack}>
                Back
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                className="btn-next"
                onClick={handleNext}
                disabled={!validateStep()}
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                className="btn-create"
                onClick={handleSubmit}
                disabled={!validateStep()}
              >
                Submit Change Plan
              </button>
            )}
          </div>
        </main>
        <button className="close-button" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CreateChangePlanModal;
