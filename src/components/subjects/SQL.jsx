import React, { useState, useEffect } from 'react';
import {
  FaDatabase, FaBars, FaArrowLeft, FaTimes, FaLightbulb,
  FaExclamationTriangle, FaCopy, FaChevronDown, FaChevronUp,
  FaCode, FaTable, FaLink, FaSearch, FaKey, FaLock, FaExchangeAlt
} from 'react-icons/fa';

const SQL = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Toggle submenu visibility
  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? '' : menu);
  };

  // Handle copy button click
  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth <= 768 && sidebarOpen &&
        !event.target.closest('#sidebar') &&
        !event.target.closest('.sidebar-toggle')) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  // SQL data organized by sections
  const sqlData = {
    introduction: {
      title: "Introduction to SQL",
      cards: [
        {
          title: "What is Database?",
          content: "Database is a structured collection of data that is organized and stored electronically in a computer system."
        },
        {
          title: "What is DBMS?",
          content: "DBMS (Database Management System) is software used to create, manage, and organize databases. It provides an interface between users/applications and the database."
        },
        {
          title: "What is RDBMS?",
          content: (
            <ul className="list-disc pl-6 space-y-1">
              <li>RDBMS (Relational Database Management System) - is a DBMS based on the relational model of data.</li>
              <li>Data is organized into tables (also known as relations) with rows (records/tuples) and columns (attributes/fields).</li>
              <li>Tables can be related to each other through keys (primary and foreign keys).</li>
              <li>Examples: MySQL, PostgreSQL, Oracle, SQL Server, SQLite.</li>
            </ul>
          )
        },
        {
          title: "What is SQL?",
          content: (
            <>
              <p>SQL (Structured Query Language) is a standard language used to store, manipulate and retrieve data from relational databases.</p>
              <p className="italic">(It is not a database itself, but a language used to interact with relational databases)</p>
              <h4 className="font-bold mt-4 mb-2">We use SQL for CRUD Operations:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>CREATE</strong> - To create databases, tables, insert data into tables</li>
                <li><strong>READ</strong> - To query and retrieve data from the database</li>
                <li><strong>UPDATE</strong> - To modify existing data in the database</li>
                <li><strong>DELETE</strong> - To remove data from the database</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-yellow-800">Note:</p>
                    <p className="text-yellow-700">SQL keywords are NOT case sensitive. Eg: select is the same as SELECT in SQL.</p>
                    <p className="text-yellow-700 mt-1">However, table and column names may be case sensitive depending on the database system.</p>
                  </div>
                </div>
              </div>
            </>
          )
        },
        {
          title: "SQL v/s MySQL",
          content: "SQL is a standard language used to interact with relational databases, while MySQL is a specific relational database management system (RDBMS) that uses SQL as its query language."
        }
      ]
    },
    dataTypes: {
      title: "SQL Data Types",
      cards: [
        {
          title: "SQL Data Types",
          content: (
            <>
              <p>In SQL, data types define the kind of data that can be stored in a column or variable. Choosing the right data type is important for data integrity and performance.</p>
              <div className="overflow-x-auto my-6 rounded-lg shadow">
                <table className="min-w-full">
                  <thead className="bg-purple-600 text-white">
                    <tr>
                      <th className="px-4 py-2">DATATYPE</th>
                      <th className="px-4 py-2">DESCRIPTION</th>
                      <th className="px-4 py-2">USAGE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">CHAR(n)</td>
                      <td className="px-4 py-2">Fixed-length character string (0-255 chars)</td>
                      <td className="px-4 py-2">CHAR(10) for fixed-length codes like 'US001'</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">VARCHAR(n)</td>
                      <td className="px-4 py-2">Variable-length character string (0-65535 chars)</td>
                      <td className="px-4 py-2">VARCHAR(255) for names, addresses</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">TEXT</td>
                      <td className="px-4 py-2">Large text data (up to 65,535 chars)</td>
                      <td className="px-4 py-2">For articles, descriptions</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">INT</td>
                      <td className="px-4 py-2">Standard integer (-2,147,483,648 to 2,147,483,647)</td>
                      <td className="px-4 py-2">For IDs, counts, ages</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">BIGINT</td>
                      <td className="px-4 py-2">Large integer (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)</td>
                      <td className="px-4 py-2">For very large numbers</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">DECIMAL(p,s)</td>
                      <td className="px-4 py-2">Exact numeric with precision (p) and scale (s)</td>
                      <td className="px-4 py-2">DECIMAL(10,2) for monetary values</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">FLOAT</td>
                      <td className="px-4 py-2">Approximate numeric with floating decimal</td>
                      <td className="px-4 py-2">For scientific calculations</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">BOOLEAN</td>
                      <td className="px-4 py-2">True or false values</td>
                      <td className="px-4 py-2">For flags like is_active</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">DATE</td>
                      <td className="px-4 py-2">Date without time (YYYY-MM-DD)</td>
                      <td className="px-4 py-2">For birth dates</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">DATETIME</td>
                      <td className="px-4 py-2">Date and time (YYYY-MM-DD HH:MM:SS)</td>
                      <td className="px-4 py-2">For timestamps</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">TIMESTAMP</td>
                      <td className="px-4 py-2">Automatic timestamp when row is created/modified</td>
                      <td className="px-4 py-2">For record keeping</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">BLOB</td>
                      <td className="px-4 py-2">Binary Large Object for storing binary data</td>
                      <td className="px-4 py-2">For images, files</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-yellow-800">Note:</p>
                    <p className="text-yellow-700">CHAR is for fixed length & VARCHAR is for variable length strings. VARCHAR is generally preferred as it only occupies necessary memory.</p>
                    <p className="text-yellow-700 mt-1">Use UNSIGNED with numeric types when you only need positive values (e.g., UNSIGNED INT for ages).</p>
                    <p className="text-yellow-700 mt-1">Choose the smallest data type that can comfortably handle your data to improve performance.</p>
                  </div>
                </div>
              </div>
            </>
          )
        }
      ]
    },
    commands: {
      title: "SQL Commands Categories",
      cards: [
        {
          title: "Types of SQL Commands",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="font-bold text-lg text-purple-800 mb-3 flex items-center">
                    <FaCode className="mr-2" /> DDL (Data Definition Language)
                  </h3>
                  <p className="mb-2">Commands that define the database structure:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>CREATE</strong> - Creates database objects (tables, views, etc.)</li>
                    <li><strong>ALTER</strong> - Modifies database objects</li>
                    <li><strong>DROP</strong> - Deletes database objects</li>
                    <li><strong>TRUNCATE</strong> - Removes all records from a table</li>
                    <li><strong>RENAME</strong> - Renames database objects</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-lg text-blue-800 mb-3 flex items-center">
                    <FaSearch className="mr-2" /> DQL (Data Query Language)
                  </h3>
                  <p className="mb-2">Commands that query the database:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>SELECT</strong> - Retrieves data from the database</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-bold text-lg text-green-800 mb-3 flex items-center">
                    <FaExchangeAlt className="mr-2" /> DML (Data Manipulation Language)
                  </h3>
                  <p className="mb-2">Commands that manipulate data:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>INSERT</strong> - Adds new records</li>
                    <li><strong>UPDATE</strong> - Modifies existing records</li>
                    <li><strong>DELETE</strong> - Removes records</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="font-bold text-lg text-red-800 mb-3 flex items-center">
                    <FaLock className="mr-2" /> DCL (Data Control Language)
                  </h3>
                  <p className="mb-2">Commands that control access to data:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>GRANT</strong> - Gives user access privileges</li>
                    <li><strong>REVOKE</strong> - Removes user access privileges</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h3 className="font-bold text-lg text-yellow-800 mb-3 flex items-center">
                  <FaKey className="mr-2" /> TCL (Transaction Control Language)
                </h3>
                <p className="mb-2">Commands that manage transactions:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>COMMIT</strong> - Saves transaction changes permanently</li>
                  <li><strong>ROLLBACK</strong> - Undoes transaction changes</li>
                  <li><strong>SAVEPOINT</strong> - Sets a point within a transaction to roll back to</li>
                  <li><strong>SET TRANSACTION</strong> - Configures transaction properties</li>
                </ul>
              </div>
            </div>
          )
        }
      ]
    },
    ddl: {
      title: "Data Definition Language (DDL)",
      cards: [
        {
          title: "CREATE TABLE",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Used to create a new table in the database.</li>
                <li>Specifies the table name, column names, data types, constraints, and more.</li>
                <li>Basic syntax: <code className="bg-gray-100 px-1 rounded">CREATE TABLE table_name (column1 datatype constraints, column2 datatype constraints, ...);</code></li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Create a simple employees table
CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE,
  hire_date DATE NOT NULL,
  salary DECIMAL(10,2) CHECK (salary > 0),
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(department_id)
);`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE,
  hire_date DATE NOT NULL,
  salary DECIMAL(10,2) CHECK (salary > 0),
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(department_id)
);`, 'create-table')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'create-table' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'create-table' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-800">Tip:</p>
                    <p className="text-blue-700">Always specify constraints like NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK during table creation to enforce data integrity.</p>
                  </div>
                </div>
              </div>
            </>
          )
        },
        {
          title: "ALTER TABLE",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Used to modify the structure of an existing table.</li>
                <li>Can add, modify, or drop columns, constraints, indexes, etc.</li>
                <li>Common operations: ADD COLUMN, DROP COLUMN, MODIFY COLUMN, ADD CONSTRAINT, etc.</li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Add a new column
ALTER TABLE employees ADD COLUMN phone_number VARCHAR(15);

-- Modify a column's data type
ALTER TABLE employees MODIFY COLUMN salary DECIMAL(12,2);

-- Add a constraint
ALTER TABLE employees ADD CONSTRAINT chk_salary CHECK (salary < 1000000);

-- Drop a column
ALTER TABLE employees DROP COLUMN phone_number;

-- Rename a column
ALTER TABLE employees RENAME COLUMN salary TO annual_salary;`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- Add a new column
ALTER TABLE employees ADD COLUMN phone_number VARCHAR(15);

-- Modify a column's data type
ALTER TABLE employees MODIFY COLUMN salary DECIMAL(12,2);

-- Add a constraint
ALTER TABLE employees ADD CONSTRAINT chk_salary CHECK (salary < 1000000);

-- Drop a column
ALTER TABLE employees DROP COLUMN phone_number;

-- Rename a column
ALTER TABLE employees RENAME COLUMN salary TO annual_salary;`, 'alter-table')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'alter-table' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'alter-table' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        },
        {
          title: "DROP TABLE",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Permanently deletes a table and all its data from the database.</li>
                <li>Use with caution as this operation cannot be undone.</li>
                <li>Syntax: <code className="bg-gray-100 px-1 rounded">DROP TABLE [IF EXISTS] table_name;</code></li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Basic drop table
DROP TABLE temp_employees;

-- Safer drop with existence check
DROP TABLE IF EXISTS temp_employees;`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- Basic drop table
DROP TABLE temp_employees;

-- Safer drop with existence check
DROP TABLE IF EXISTS temp_employees;`, 'drop-table')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'drop-table' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'drop-table' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaExclamationTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-800">Warning:</p>
                    <p className="text-red-700">DROP TABLE permanently removes the table and all its data. Always double-check before executing this command and consider taking a backup first.</p>
                  </div>
                </div>
              </div>
            </>
          )
        },
        {
          title: "TRUNCATE TABLE",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Removes all rows from a table but keeps the table structure intact.</li>
                <li>Faster than DELETE for large tables as it doesn't log individual row deletions.</li>
                <li>Cannot be used with WHERE clause (unlike DELETE).</li>
                <li>Syntax: <code className="bg-gray-100 px-1 rounded">TRUNCATE TABLE table_name;</code></li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Remove all data from a table
TRUNCATE TABLE employee_archive;

-- With restart identity (for auto-increment columns)
TRUNCATE TABLE employee_archive RESTART IDENTITY;`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- Remove all data from a table
TRUNCATE TABLE employee_archive;

-- With restart identity (for auto-increment columns)
TRUNCATE TABLE employee_archive RESTART IDENTITY;`, 'truncate-table')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'truncate-table' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'truncate-table' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-purple-800">Tip:</p>
                    <p className="text-purple-700">Use TRUNCATE when you need to quickly empty a large table. Use DELETE when you need to remove specific rows or when you need the operation to be logged for potential rollback.</p>
                  </div>
                </div>
              </div>
            </>
          )
        }
      ]
    },
    dml: {
      title: "Data Manipulation Language (DML)",
      cards: [
        {
          title: "INSERT",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Adds new rows of data to a table.</li>
                <li>Two main syntax forms: specifying columns or inserting into all columns.</li>
                <li>Can insert single or multiple rows at once.</li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Insert with column specification
INSERT INTO employees (employee_id, first_name, last_name, hire_date, salary)
VALUES (101, 'John', 'Doe', '2020-05-15', 75000.00);

-- Insert into all columns (must provide values for all columns in order)
INSERT INTO employees 
VALUES (102, 'Jane', 'Smith', 'jane.smith@example.com', '2019-08-22', 82000.00, 10);

-- Insert multiple rows in one statement
INSERT INTO employees (employee_id, first_name, last_name, hire_date, salary)
VALUES 
  (103, 'Robert', 'Johnson', '2021-02-10', 68000.00),
  (104, 'Emily', 'Williams', '2021-03-05', 72000.00),
  (105, 'Michael', 'Brown', '2018-11-30', 90000.00);

-- Insert from another table
INSERT INTO employee_archive
SELECT * FROM employees WHERE hire_date < '2020-01-01';`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- Insert with column specification
INSERT INTO employees (employee_id, first_name, last_name, hire_date, salary)
VALUES (101, 'John', 'Doe', '2020-05-15', 75000.00);

-- Insert into all columns (must provide values for all columns in order)
INSERT INTO employees 
VALUES (102, 'Jane', 'Smith', 'jane.smith@example.com', '2019-08-22', 82000.00, 10);

-- Insert multiple rows in one statement
INSERT INTO employees (employee_id, first_name, last_name, hire_date, salary)
VALUES 
  (103, 'Robert', 'Johnson', '2021-02-10', 68000.00),
  (104, 'Emily', 'Williams', '2021-03-05', 72000.00),
  (105, 'Michael', 'Brown', '2018-11-30', 90000.00);

-- Insert from another table
INSERT INTO employee_archive
SELECT * FROM employees WHERE hire_date < '2020-01-01';`, 'insert')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'insert' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'insert' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-800">Best Practice:</p>
                    <p className="text-blue-700">Always specify column names in INSERT statements rather than relying on column order. This makes your code more maintainable and less prone to errors if the table structure changes.</p>
                  </div>
                </div>
              </div>
            </>
          )
        },
        {
          title: "UPDATE",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Modifies existing data in a table.</li>
                <li>Can update one or multiple columns at once.</li>
                <li>Typically used with a WHERE clause to specify which rows to update.</li>
                <li>Without WHERE, updates all rows in the table.</li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Update a single column for specific rows
UPDATE employees 
SET salary = 80000.00 
WHERE employee_id = 101;

-- Update multiple columns
UPDATE employees
SET salary = salary * 1.05,  -- 5% raise
    department_id = 20
WHERE department_id = 10;

-- Update with subquery
UPDATE employees
SET manager_id = (
  SELECT employee_id FROM managers 
  WHERE department_id = employees.department_id
)
WHERE manager_id IS NULL;

-- Update all rows (use with caution!)
UPDATE products
SET last_updated = CURRENT_DATE;`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- Update a single column for specific rows
UPDATE employees 
SET salary = 80000.00 
WHERE employee_id = 101;

-- Update multiple columns
UPDATE employees
SET salary = salary * 1.05,  -- 5% raise
    department_id = 20
WHERE department_id = 10;

-- Update with subquery
UPDATE employees
SET manager_id = (
  SELECT employee_id FROM managers 
  WHERE department_id = employees.department_id
)
WHERE manager_id IS NULL;

-- Update all rows (use with caution!)
UPDATE products
SET last_updated = CURRENT_DATE;`, 'update')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'update' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'update' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaExclamationTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-800">Warning:</p>
                    <p className="text-red-700">Always test UPDATE statements with a SELECT first to verify which rows will be affected. An UPDATE without a WHERE clause will modify all rows in the table!</p>
                  </div>
                </div>
              </div>
            </>
          )
        },
        {
          title: "DELETE",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Removes rows from a table.</li>
                <li>Typically used with a WHERE clause to specify which rows to delete.</li>
                <li>Without WHERE, deletes all rows in the table (but keeps table structure).</li>
                <li>For deleting all rows, TRUNCATE is usually more efficient.</li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Delete specific rows
DELETE FROM employees 
WHERE employee_id = 105;

-- Delete with condition
DELETE FROM order_items
WHERE order_id IN (
  SELECT order_id FROM orders 
  WHERE order_date < '2020-01-01'
);

-- Delete all rows (use with caution!)
DELETE FROM temp_logs;`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- Delete specific rows
DELETE FROM employees 
WHERE employee_id = 105;

-- Delete with condition
DELETE FROM order_items
WHERE order_id IN (
  SELECT order_id FROM orders 
  WHERE order_date < '2020-01-01'
);

-- Delete all rows (use with caution!)
DELETE FROM temp_logs;`, 'delete')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'delete' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'delete' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-purple-800">Tip:</p>
                    <p className="text-purple-700">Before deleting data, consider:
                      <br />1) Taking a backup
                      <br />2) Using transactions so you can rollback if needed
                      <br />3) Testing with a SELECT first to see what will be deleted</p>
                  </div>
                </div>
              </div>
            </>
          )
        }
      ]
    },
    dql: {
      title: "Data Query Language (DQL)",
      cards: [
        {
          title: "SELECT Statement",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Retrieves data from one or more tables.</li>
                <li>The most commonly used SQL command.</li>
                <li>Basic syntax: <code className="bg-gray-100 px-1 rounded">SELECT columns FROM table [WHERE condition] [ORDER BY] [GROUP BY] [HAVING] [LIMIT];</code></li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Basic select
SELECT * FROM employees;

-- Select specific columns
SELECT first_name, last_name, salary FROM employees;

-- With WHERE clause
SELECT * FROM employees WHERE department_id = 10;

-- With ORDER BY
SELECT * FROM products ORDER BY price DESC;

-- With GROUP BY and aggregate functions
SELECT department_id, AVG(salary) as avg_salary
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 50000;

-- With JOIN
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id;

-- With LIMIT (or TOP in some databases)
SELECT * FROM large_table LIMIT 100;`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- Basic select
SELECT * FROM employees;

-- Select specific columns
SELECT first_name, last_name, salary FROM employees;

-- With WHERE clause
SELECT * FROM employees WHERE department_id = 10;

-- With ORDER BY
SELECT * FROM products ORDER BY price DESC;

-- With GROUP BY and aggregate functions
SELECT department_id, AVG(salary) as avg_salary
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 50000;

-- With JOIN
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id;

-- With LIMIT (or TOP in some databases)
SELECT * FROM large_table LIMIT 100;`, 'select')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'select' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'select' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-800">Best Practices:</p>
                    <p className="text-blue-700">1) Avoid SELECT * in production code - specify only needed columns
                      <br />2) Use meaningful column aliases (AS) for calculated fields
                      <br />3) Add comments to complex queries
                      <br />4) Format your SQL for readability</p>
                  </div>
                </div>
              </div>
            </>
          )
        },
        {
          title: "SELECT with WHERE Clause",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Filters rows based on specified conditions.</li>
                <li>Supports comparison operators (=, &lt;&gt;, &lt;, &gt;, &lt;=, &gt;=).</li>
                <li>Supports logical operators (AND, OR, NOT).</li>
                <li>Supports pattern matching with LIKE and wildcards (%, _).</li>
                <li>Supports IN, BETWEEN, IS NULL operators.</li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Basic comparisons
SELECT * FROM products WHERE price > 100;
SELECT * FROM employees WHERE department_id <> 10;

-- Logical operators
SELECT * FROM orders 
WHERE order_date >= '2023-01-01' 
AND order_date <= '2023-01-31';

-- LIKE for pattern matching
SELECT * FROM customers 
WHERE last_name LIKE 'Sm%';  -- Starts with 'Sm'

-- IN for multiple possible values
SELECT * FROM products 
WHERE category_id IN (5, 10, 15);

-- BETWEEN for ranges
SELECT * FROM employees
WHERE salary BETWEEN 50000 AND 80000;

-- IS NULL for missing values
SELECT * FROM orders 
WHERE shipped_date IS NULL;`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- Basic comparisons
SELECT * FROM products WHERE price > 100;
SELECT * FROM employees WHERE department_id <> 10;

-- Logical operators
SELECT * FROM orders 
WHERE order_date >= '2023-01-01' 
AND order_date <= '2023-01-31';

-- LIKE for pattern matching
SELECT * FROM customers 
WHERE last_name LIKE 'Sm%';  -- Starts with 'Sm'

-- IN for multiple possible values
SELECT * FROM products 
WHERE category_id IN (5, 10, 15);

-- BETWEEN for ranges
SELECT * FROM employees
WHERE salary BETWEEN 50000 AND 80000;

-- IS NULL for missing values
SELECT * FROM orders 
WHERE shipped_date IS NULL;`, 'select-where')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'select-where' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'select-where' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        },
        {
          title: "Aggregate Functions",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Perform calculations on sets of values.</li>
                <li>Commonly used with GROUP BY clause.</li>
                <li>Common aggregate functions: COUNT, SUM, AVG, MIN, MAX.</li>
                <li>HAVING clause filters groups after aggregation (like WHERE for rows).</li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Count all rows
SELECT COUNT(*) FROM employees;

-- Count non-null values in a column
SELECT COUNT(manager_id) FROM employees;

-- Basic aggregates
SELECT 
  AVG(salary) as avg_salary,
  MIN(salary) as min_salary,
  MAX(salary) as max_salary,
  SUM(salary) as total_payroll
FROM employees;

-- With GROUP BY
SELECT 
  department_id,
  COUNT(*) as employee_count,
  AVG(salary) as avg_salary
FROM employees
GROUP BY department_id;

-- With HAVING (filter groups)
SELECT 
  department_id,
  COUNT(*) as employee_count
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 5;`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- Count all rows
SELECT COUNT(*) FROM employees;

-- Count non-null values in a column
SELECT COUNT(manager_id) FROM employees;

-- Basic aggregates
SELECT 
  AVG(salary) as avg_salary,
  MIN(salary) as min_salary,
  MAX(salary) as max_salary,
  SUM(salary) as total_payroll
FROM employees;

-- With GROUP BY
SELECT 
  department_id,
  COUNT(*) as employee_count,
  AVG(salary) as avg_salary
FROM employees
GROUP BY department_id;

-- With HAVING (filter groups)
SELECT 
  department_id,
  COUNT(*) as employee_count
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 5;`, 'aggregates')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'aggregates' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'aggregates' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-purple-800">Tip:</p>
                    <p className="text-purple-700">1) COUNT(*) counts all rows including NULLs, COUNT(column) counts non-NULL values in that column
                      <br />2) Use meaningful aliases for aggregate columns
                      <br />3) WHERE filters rows before grouping, HAVING filters groups after aggregation</p>
                  </div>
                </div>
              </div>
            </>
          )
        }
      ]
    },  
    joins: {
      title: "SQL Joins",
      cards: [
        {
          title: "Introduction to Joins",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Combine rows from two or more tables based on related columns.</li>
                <li>Essential for working with normalized databases where data is spread across multiple tables.</li>
                <li>Types: INNER JOIN, LEFT (OUTER) JOIN, RIGHT (OUTER) JOIN, FULL (OUTER) JOIN, CROSS JOIN, SELF JOIN.</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-800">Visualization:</p>
                    <p className="text-blue-700">Imagine two circles overlapping (Venn diagram). The overlapping area represents matched rows, while non-overlapping areas represent unmatched rows.</p>
                  </div>
                </div>
              </div>
            </>
          )
        },
        {
          title: "INNER JOIN",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Returns only rows where there's a match in both tables.</li>
                <li>Most common type of join.</li>
                <li>Syntax: <code className="bg-gray-100 px-1 rounded">SELECT columns FROM table1 INNER JOIN table2 ON table1.column = table2.column;</code></li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Basic INNER JOIN
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.department_id;

-- INNER JOIN with multiple conditions
SELECT o.order_id, c.customer_name, o.order_date
FROM orders o
INNER JOIN customers c ON o.customer_id = c.customer_id 
                      AND o.region = c.region;

-- INNER JOIN with WHERE
SELECT p.product_name, c.category_name, p.price
FROM products p
INNER JOIN categories c ON p.category_id = c.category_id
WHERE p.price > 100;`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- Basic INNER JOIN
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.department_id;

-- INNER JOIN with multiple conditions
SELECT o.order_id, c.customer_name, o.order_date
FROM orders o
INNER JOIN customers c ON o.customer_id = c.customer_id 
                      AND o.region = c.region;

-- INNER JOIN with WHERE
SELECT p.product_name, c.category_name, p.price
FROM products p
INNER JOIN categories c ON p.category_id = c.category_id
WHERE p.price > 100;`, 'inner-join')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'inner-join' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'inner-join' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        },
        {
          title: "LEFT JOIN (LEFT OUTER JOIN)",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Returns all rows from the left table and matched rows from the right table.</li>
                <li>If no match, NULL values are returned for right table columns.</li>
                <li>Useful when you want all records from one table regardless of matches in the other.</li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Basic LEFT JOIN
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.department_id;

-- LEFT JOIN to find employees without departments
SELECT e.first_name, e.last_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.department_id
WHERE d.department_id IS NULL;

-- LEFT JOIN with multiple tables
SELECT c.customer_name, o.order_id, p.product_name
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
LEFT JOIN order_items oi ON o.order_id = oi.order_id
LEFT JOIN products p ON oi.product_id = p.product_id;`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- Basic LEFT JOIN
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.department_id;

-- LEFT JOIN to find employees without departments
SELECT e.first_name, e.last_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.department_id
WHERE d.department_id IS NULL;

-- LEFT JOIN with multiple tables
SELECT c.customer_name, o.order_id, p.product_name
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
LEFT JOIN order_items oi ON o.order_id = oi.order_id
LEFT JOIN products p ON oi.product_id = p.product_id;`, 'left-join')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'left-join' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'left-join' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        },
        {
          title: "RIGHT JOIN and FULL JOIN",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li><strong>RIGHT JOIN (RIGHT OUTER JOIN)</strong>: Returns all rows from the right table and matched rows from the left table. If no match, NULL values for left table columns.</li>
                <li><strong>FULL JOIN (FULL OUTER JOIN)</strong>: Returns all rows when there's a match in either left or right table. Unmatched rows get NULLs for columns from the table without a match.</li>
                <li>RIGHT JOIN is less commonly used - most queries can be rewritten with LEFT JOIN.</li>
                <li>FULL JOIN is supported in some databases (PostgreSQL, SQL Server) but not all (MySQL doesn't support it).</li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- RIGHT JOIN example
SELECT d.department_name, e.first_name, e.last_name
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.department_id;

-- FULL JOIN example (PostgreSQL, SQL Server)
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
FULL JOIN departments d ON e.department_id = d.department_id;`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- RIGHT JOIN example
SELECT d.department_name, e.first_name, e.last_name
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.department_id;

-- FULL JOIN example (PostgreSQL, SQL Server)
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
FULL JOIN departments d ON e.department_id = d.department_id;`, 'right-full-join')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'right-full-join' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'right-full-join' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        },
        {
          title: "CROSS JOIN and SELF JOIN",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li><strong>CROSS JOIN</strong>: Returns the Cartesian product of both tables (all possible combinations). No join condition.</li>
                <li><strong>SELF JOIN</strong>: A table is joined with itself. Useful for hierarchical data or comparing rows within the same table.</li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- CROSS JOIN example
SELECT s.size_name, c.color_name
FROM sizes s
CROSS JOIN colors c;

-- SELF JOIN example (employees and their managers)
SELECT e.first_name as employee, 
       m.first_name as manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;

-- SELF JOIN to find duplicate emails
SELECT a.email, a.first_name, a.last_name
FROM customers a
JOIN customers b ON a.email = b.email AND a.customer_id <> b.customer_id;`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- CROSS JOIN example
SELECT s.size_name, c.color_name
FROM sizes s
CROSS JOIN colors c;

-- SELF JOIN example (employees and their managers)
SELECT e.first_name as employee, 
       m.first_name as manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;

-- SELF JOIN to find duplicate emails
SELECT a.email, a.first_name, a.last_name
FROM customers a
JOIN customers b ON a.email = b.email AND a.customer_id <> b.customer_id;`, 'cross-self-join')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'cross-self-join' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'cross-self-join' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-purple-800">Tip:</p>
                    <p className="text-purple-700">1) CROSS JOINs can generate very large result sets (N x M rows)
                      <br />2) For SELF JOINs, always use table aliases to distinguish between the "two" tables
                      <br />3) SELF JOINs are often used for organizational charts, product hierarchies, and finding relationships within a table</p>
                  </div>
                </div>
              </div>
            </>
          )
        }
      ]
    },
    subqueries: {
      title: "Subqueries",
      cards: [
        {
          title: "Introduction to Subqueries",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>A query nested inside another query (SELECT, INSERT, UPDATE, DELETE).</li>
                <li>Also called inner queries or nested queries.</li>
                <li>Can be used in SELECT, FROM, WHERE, HAVING clauses.</li>
                <li>Types: Single-row, Multiple-row, Correlated, Scalar.</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-800">When to use subqueries:</p>
                    <p className="text-blue-700">1) When you need to compare a value to an aggregated result
                      <br />2) When you need to check for existence of records
                      <br />3) When you need to break down complex problems into steps
                      <br />4) When you need to reference the same table multiple times</p>
                  </div>
                </div>
              </div>
            </>
          )
        },
        {
          title: "WHERE Clause Subqueries",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Subquery in WHERE clause filters rows based on subquery results.</li>
                <li>Operators: IN, NOT IN, EXISTS, NOT EXISTS, ANY, ALL, comparison operators.</li>
                <li>Single-row subqueries return one row/column, multiple-row return multiple rows.</li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Single-row subquery (returns one value)
SELECT * FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Multiple-row subquery with IN
SELECT * FROM products
WHERE category_id IN (
  SELECT category_id FROM categories 
  WHERE department = 'Electronics'
);

-- EXISTS (check for existence)
SELECT * FROM customers c
WHERE EXISTS (
  SELECT 1 FROM orders o 
  WHERE o.customer_id = c.customer_id
  AND o.order_date > '2023-01-01'
);

-- Correlated subquery (references outer query)
SELECT e.first_name, e.last_name, e.salary
FROM employees e
WHERE e.salary > (
  SELECT AVG(salary) 
  FROM employees 
  WHERE department_id = e.department_id
);`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- Single-row subquery (returns one value)
SELECT * FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Multiple-row subquery with IN
SELECT * FROM products
WHERE category_id IN (
  SELECT category_id FROM categories 
  WHERE department = 'Electronics'
);

-- EXISTS (check for existence)
SELECT * FROM customers c
WHERE EXISTS (
  SELECT 1 FROM orders o 
  WHERE o.customer_id = c.customer_id
  AND o.order_date > '2023-01-01'
);

-- Correlated subquery (references outer query)
SELECT e.first_name, e.last_name, e.salary
FROM employees e
WHERE e.salary > (
  SELECT AVG(salary) 
  FROM employees 
  WHERE department_id = e.department_id
);`, 'where-subqueries')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'where-subqueries' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'where-subqueries' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        },
        {
          title: "FROM Clause Subqueries (Derived Tables)",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Subquery in FROM clause acts as a temporary table.</li>
                <li>Must have an alias.</li>
                <li>Useful for breaking down complex queries.</li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Basic derived table
SELECT dept_avg.department_id, dept_avg.avg_salary
FROM (
  SELECT department_id, AVG(salary) as avg_salary
  FROM employees
  GROUP BY department_id
) dept_avg
WHERE dept_avg.avg_salary > 50000;

-- Complex example with joins
SELECT c.customer_name, o.order_count
FROM customers c
JOIN (
  SELECT customer_id, COUNT(*) as order_count
  FROM orders
  WHERE order_date > '2023-01-01'
  GROUP BY customer_id
) o ON c.customer_id = o.customer_id;`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- Basic derived table
SELECT dept_avg.department_id, dept_avg.avg_salary
FROM (
  SELECT department_id, AVG(salary) as avg_salary
  FROM employees
  GROUP BY department_id
) dept_avg
WHERE dept_avg.avg_salary > 50000;

-- Complex example with joins
SELECT c.customer_name, o.order_count
FROM customers c
JOIN (
  SELECT customer_id, COUNT(*) as order_count
  FROM orders
  WHERE order_date > '2023-01-01'
  GROUP BY customer_id
) o ON c.customer_id = o.customer_id;`, 'from-subqueries')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'from-subqueries' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'from-subqueries' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        },
        {
          title: "SELECT Clause Subqueries (Scalar Subqueries)",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Subquery in SELECT clause returns a single value for each row.</li>
                <li>Must return exactly one row and one column.</li>
                <li>Executed once for each row in the outer query.</li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Basic scalar subquery
SELECT 
  first_name,
  last_name,
  salary,
  (SELECT AVG(salary) FROM employees) as company_avg,
  salary - (SELECT AVG(salary) FROM employees) as diff_from_avg
FROM employees;

-- Correlated scalar subquery
SELECT 
  e.first_name,
  e.last_name,
  e.salary,
  (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id) as dept_avg
FROM employees e;`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- Basic scalar subquery
SELECT 
  first_name,
  last_name,
  salary,
  (SELECT AVG(salary) FROM employees) as company_avg,
  salary - (SELECT AVG(salary) FROM employees) as diff_from_avg
FROM employees;

-- Correlated scalar subquery
SELECT 
  e.first_name,
  e.last_name,
  e.salary,
  (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id) as dept_avg
FROM employees e;`, 'select-subqueries')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'select-subqueries' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'select-subqueries' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-purple-800">Performance Note:</p>
                    <p className="text-purple-700">Correlated subqueries in SELECT clauses can be inefficient for large tables as they execute once per row. Consider using JOINs instead for better performance.</p>
                  </div>
                </div>
              </div>
            </>
          )
        }
      ]
    },
    windowFunctions: {
      title: "Window Functions",
      cards: [
        {
          title: "Introduction to Window Functions",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Perform calculations across a set of table rows related to the current row.</li>
                <li>Similar to aggregate functions but don't group rows into a single output row.</li>
                <li>Syntax: <code className="bg-gray-100 px-1 rounded">function() OVER ([PARTITION BY cols] [ORDER BY cols] [frame_clause])</code></li>
                <li>Common functions: ROW_NUMBER(), RANK(), DENSE_RANK(), NTILE(), LEAD(), LAG(), FIRST_VALUE(), LAST_VALUE(), aggregate functions.</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-800">Key Concepts:</p>
                    <p className="text-blue-700">1) <strong>PARTITION BY</strong> divides rows into groups (like GROUP BY but without collapsing rows)
                      <br />2) <strong>ORDER BY</strong> determines the order of rows within each partition
                      <br />3) <strong>Window frame</strong> defines which rows to include relative to current row (ROWS/RANGE BETWEEN)</p>
                  </div>
                </div>
              </div>
            </>
          )
        },
        {
          title: "Ranking Functions",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li><strong>ROW_NUMBER()</strong>: Assigns a unique sequential integer to rows within a partition.</li>
                <li><strong>RANK()</strong>: Same as ROW_NUMBER() but gives same rank to ties, with gaps.</li>
                <li><strong>DENSE_RANK()</strong>: Like RANK() but without gaps in ranking values.</li>
                <li><strong>NTILE(n)</strong>: Divides rows into n roughly equal groups.</li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Basic ranking
SELECT 
  first_name,
  last_name,
  salary,
  ROW_NUMBER() OVER (ORDER BY salary DESC) as row_num,
  RANK() OVER (ORDER BY salary DESC) as rank,
  DENSE_RANK() OVER (ORDER BY salary DESC) as dense_rank
FROM employees;

-- With PARTITION BY
SELECT 
  department_id,
  first_name,
  last_name,
  salary,
  RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as dept_rank
FROM employees;

-- NTILE example (divide into 4 groups)
SELECT 
  first_name,
  last_name,
  salary,
  NTILE(4) OVER (ORDER BY salary DESC) as quartile
FROM employees;`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- Basic ranking
SELECT 
  first_name,
  last_name,
  salary,
  ROW_NUMBER() OVER (ORDER BY salary DESC) as row_num,
  RANK() OVER (ORDER BY salary DESC) as rank,
  DENSE_RANK() OVER (ORDER BY salary DESC) as dense_rank
FROM employees;

-- With PARTITION BY
SELECT 
  department_id,
  first_name,
  last_name,
  salary,
  RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as dept_rank
FROM employees;

-- NTILE example (divide into 4 groups)
SELECT 
  first_name,
  last_name,
  salary,
  NTILE(4) OVER (ORDER BY salary DESC) as quartile
FROM employees;`, 'ranking-functions')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'ranking-functions' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'ranking-functions' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        },
        {
          title: "Analytic Functions",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li><strong>LEAD()</strong>: Accesses data from a subsequent row.</li>
                <li><strong>LAG()</strong>: Accesses data from a previous row.</li>
                <li><strong>FIRST_VALUE()</strong>: Returns the first value in the window frame.</li>
                <li><strong>LAST_VALUE()</strong>: Returns the last value in the window frame.</li>
                <li><strong>NTH_VALUE()</strong>: Returns the nth value in the window frame.</li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- LEAD and LAG (compare to next/previous row)
SELECT 
  order_id,
  customer_id,
  order_date,
  LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date) as prev_order_date,
  LEAD(order_date) OVER (PARTITION BY customer_id ORDER BY order_date) as next_order_date
FROM orders;

-- FIRST_VALUE and LAST_VALUE
SELECT 
  product_id,
  sale_date,
  amount,
  FIRST_VALUE(amount) OVER (PARTITION BY product_id ORDER BY sale_date) as first_sale_amount,
  LAST_VALUE(amount) OVER (PARTITION BY product_id ORDER BY sale_date 
                           ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as last_sale_amount
FROM sales;

-- Calculate running total
SELECT 
  date,
  amount,
  SUM(amount) OVER (ORDER BY date) as running_total
FROM daily_sales;`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- LEAD and LAG (compare to next/previous row)
SELECT 
  order_id,
  customer_id,
  order_date,
  LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date) as prev_order_date,
  LEAD(order_date) OVER (PARTITION BY customer_id ORDER BY order_date) as next_order_date
FROM orders;

-- FIRST_VALUE and LAST_VALUE
SELECT 
  product_id,
  sale_date,
  amount,
  FIRST_VALUE(amount) OVER (PARTITION BY product_id ORDER BY sale_date) as first_sale_amount,
  LAST_VALUE(amount) OVER (PARTITION BY product_id ORDER BY sale_date 
                           ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as last_sale_amount
FROM sales;

-- Calculate running total
SELECT 
  date,
  amount,
  SUM(amount) OVER (ORDER BY date) as running_total
FROM daily_sales;`, 'analytic-functions')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'analytic-functions' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'analytic-functions' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-purple-800">Window Frame Tip:</p>
                    <p className="text-purple-700">For LAST_VALUE(), you typically need to specify ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING to get the actual last value in the partition. The default frame is RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW which gives unexpected results.</p>
                  </div>
                </div>
              </div>
            </>
          )
        },
        {
          title: "Aggregate Window Functions",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Regular aggregate functions (SUM, AVG, COUNT, etc.) can be used as window functions.</li>
                <li>Allow calculating aggregates without collapsing rows like GROUP BY does.</li>
                <li>Useful for running totals, moving averages, cumulative sums, etc.</li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Running total and moving average
SELECT 
  date,
  amount,
  SUM(amount) OVER (ORDER BY date) as running_total,
  AVG(amount) OVER (ORDER BY date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as moving_avg_3day
FROM daily_sales;

-- Department averages with individual salaries
SELECT 
  first_name,
  last_name,
  department_id,
  salary,
  AVG(salary) OVER (PARTITION BY department_id) as dept_avg_salary,
  salary - AVG(salary) OVER (PARTITION BY department_id) as diff_from_avg
FROM employees;

-- Percentage of total
SELECT 
  product_id,
  category_id,
  amount,
  amount / SUM(amount) OVER (PARTITION BY category_id) * 100 as pct_of_category
FROM product_sales;`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- Running total and moving average
SELECT 
  date,
  amount,
  SUM(amount) OVER (ORDER BY date) as running_total,
  AVG(amount) OVER (ORDER BY date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as moving_avg_3day
FROM daily_sales;

-- Department averages with individual salaries
SELECT 
  first_name,
  last_name,
  department_id,
  salary,
  AVG(salary) OVER (PARTITION BY department_id) as dept_avg_salary,
  salary - AVG(salary) OVER (PARTITION BY department_id) as diff_from_avg
FROM employees;

-- Percentage of total
SELECT 
  product_id,
  category_id,
  amount,
  amount / SUM(amount) OVER (PARTITION BY category_id) * 100 as pct_of_category
FROM product_sales;`, 'aggregate-window')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'aggregate-window' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'aggregate-window' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        }
      ]
    },
    constraints: {
      title: "SQL Constraints",
      cards: [
        {
          title: "Introduction to Constraints",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Rules enforced on data columns to maintain data integrity.</li>
                <li>Can be specified when creating or altering tables.</li>
                <li>Types: PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, DEFAULT.</li>
              </ul>
              <div className="overflow-x-auto my-6 rounded-lg shadow">
                <table className="min-w-full">
                  <thead className="bg-purple-600 text-white">
                    <tr>
                      <th className="px-4 py-2">CONSTRAINT</th>
                      <th className="px-4 py-2">DESCRIPTION</th>
                      <th className="px-4 py-2">EXAMPLE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">PRIMARY KEY</td>
                      <td className="px-4 py-2">Uniquely identifies each row in a table (NOT NULL + UNIQUE)</td>
                      <td className="px-4 py-2">id INT PRIMARY KEY</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">FOREIGN KEY</td>
                      <td className="px-4 py-2">Ensures referential integrity to another table's PRIMARY KEY</td>
                      <td className="px-4 py-2">FOREIGN KEY (dept_id) REFERENCES departments(id)</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">UNIQUE</td>
                      <td className="px-4 py-2">All values in column must be different (NULL is allowed)</td>
                      <td className="px-4 py-2">email VARCHAR(100) UNIQUE</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">NOT NULL</td>
                      <td className="px-4 py-2">Column cannot have NULL values</td>
                      <td className="px-4 py-2">name VARCHAR(50) NOT NULL</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">CHECK</td>
                      <td className="px-4 py-2">Ensures values meet specific conditions</td>
                      <td className="px-4 py-2">age INT CHECK (age &gt;= 18)</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">DEFAULT</td>
                      <td className="px-4 py-2">Sets a default value when no value is specified</td>
                      <td className="px-4 py-2">created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )
        },
        {
          title: "PRIMARY KEY Constraint",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Uniquely identifies each record in a table.</li>
                <li>Must contain UNIQUE values and cannot contain NULL values.</li>
                <li>A table can have only one PRIMARY KEY (which may consist of multiple columns).</li>
                <li>Primary keys are automatically indexed for faster lookups.</li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Single column primary key
CREATE TABLE students (
  student_id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE
);

-- Composite primary key (multiple columns)
CREATE TABLE order_items (
  order_id INT,
  product_id INT,
  quantity INT,
  PRIMARY KEY (order_id, product_id)
);

-- Adding primary key to existing table
ALTER TABLE employees ADD PRIMARY KEY (employee_id);`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- Single column primary key
CREATE TABLE students (
  student_id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE
);

-- Composite primary key (multiple columns)
CREATE TABLE order_items (
  order_id INT,
  product_id INT,
  quantity INT,
  PRIMARY KEY (order_id, product_id)
);

-- Adding primary key to existing table
ALTER TABLE employees ADD PRIMARY KEY (employee_id);`, 'primary-key')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'primary-key' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'primary-key' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        },
        {
          title: "FOREIGN KEY Constraint",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Creates a relationship between two tables.</li>
                <li>Ensures referential integrity - values must exist in the referenced table.</li>
                <li>Can specify actions on update/delete: CASCADE, SET NULL, SET DEFAULT, RESTRICT, NO ACTION.</li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Basic foreign key
CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  order_date DATE,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- With ON DELETE CASCADE (delete child records when parent is deleted)
CREATE TABLE order_items (
  item_id INT PRIMARY KEY,
  order_id INT,
  product_id INT,
  FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Adding foreign key to existing table
ALTER TABLE employees
ADD CONSTRAINT fk_department
FOREIGN KEY (department_id) REFERENCES departments(department_id);`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- Basic foreign key
CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  order_date DATE,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- With ON DELETE CASCADE (delete child records when parent is deleted)
CREATE TABLE order_items (
  item_id INT PRIMARY KEY,
  order_id INT,
  product_id INT,
  FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Adding foreign key to existing table
ALTER TABLE employees
ADD CONSTRAINT fk_department
FOREIGN KEY (department_id) REFERENCES departments(department_id);`, 'foreign-key')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'foreign-key' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'foreign-key' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-800">Referential Actions:</p>
                    <p className="text-blue-700">1) <strong>CASCADE</strong>: Automatically delete/update child rows
                      <br />2) <strong>SET NULL</strong>: Set foreign key to NULL when parent is deleted
                      <br />3) <strong>SET DEFAULT</strong>: Set foreign key to its default value
                      <br />4) <strong>RESTRICT/NO ACTION</strong>: Prevent parent row deletion if child rows exist</p>
                  </div>
                </div>
              </div>
            </>
          )
        }
      ]
    },
    indexes: {
      title: "SQL Indexes",
      cards: [
        {
          title: "Introduction to Indexes",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Database objects that improve the speed of data retrieval operations.</li>
                <li>Work like an index in a book - allow quick lookup without scanning every row.</li>
                <li>Tradeoff: Improved read performance vs. slower writes and increased storage.</li>
                <li>Types: Single-column, Composite, Unique, Clustered, Non-clustered, Full-text.</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-800">When to use indexes:</p>
                    <p className="text-blue-700">1) Columns frequently used in WHERE clauses
                      <br />2) Columns used in JOIN conditions
                      <br />3) Columns used in ORDER BY clauses
                      <br />4) Columns with high selectivity (many unique values)</p>
                  </div>
                </div>
              </div>
            </>
          )
        },
        {
          title: "Creating and Using Indexes",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Primary keys and unique constraints automatically create indexes.</li>
                <li>Syntax: <code className="bg-gray-100 px-1 rounded">CREATE [UNIQUE] INDEX index_name ON table_name (column1, column2, ...);</code></li>
                <li>Can specify sort order (ASC/DESC) for each column in the index.</li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Single-column index
CREATE INDEX idx_customer_name ON customers(last_name);

-- Composite index (multiple columns)
CREATE INDEX idx_order_date_customer ON orders(order_date, customer_id);

-- Unique index
CREATE UNIQUE INDEX idx_product_code ON products(product_code);

-- Index with sort order
CREATE INDEX idx_salary_desc ON employees(salary DESC);

-- Partial index (only on some rows)
CREATE INDEX idx_active_users ON users(email) WHERE is_active = true;

-- Dropping an index
DROP INDEX idx_customer_name ON customers;`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- Single-column index
CREATE INDEX idx_customer_name ON customers(last_name);

-- Composite index (multiple columns)
CREATE INDEX idx_order_date_customer ON orders(order_date, customer_id);

-- Unique index
CREATE UNIQUE INDEX idx_product_code ON products(product_code);

-- Index with sort order
CREATE INDEX idx_salary_desc ON employees(salary DESC);

-- Partial index (only on some rows)
CREATE INDEX idx_active_users ON users(email) WHERE is_active = true;

-- Dropping an index
DROP INDEX idx_customer_name ON customers;`, 'indexes')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'indexes' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'indexes' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-purple-800">Index Best Practices:</p>
                    <p className="text-purple-700">1) Don't over-index - each index adds overhead
                      <br />2) Order matters in composite indexes - put most selective columns first
                      <br />3) Consider covering indexes that include all columns needed by a query
                      <br />4) Monitor and remove unused indexes
                      <br />5) Consider partial indexes for filtered queries</p>
                  </div>
                </div>
              </div>
            </>
          )
        }
      ]
    },
    transactions: {
      title: "SQL Transactions",
      cards: [
        {
          title: "Introduction to Transactions",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>A sequence of operations performed as a single logical unit of work.</li>
                <li>Follows ACID properties: Atomicity, Consistency, Isolation, Durability.</li>
                <li>Key commands: BEGIN, COMMIT, ROLLBACK, SAVEPOINT.</li>
              </ul>
              <div className="overflow-x-auto my-6 rounded-lg shadow">
                <table className="min-w-full">
                  <thead className="bg-purple-600 text-white">
                    <tr>
                      <th className="px-4 py-2">ACID PROPERTY</th>
                      <th className="px-4 py-2">DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">Atomicity</td>
                      <td className="px-4 py-2">All operations in a transaction complete successfully or none do</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">Consistency</td>
                      <td className="px-4 py-2">Database remains in a consistent state before and after transaction</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">Isolation</td>
                      <td className="px-4 py-2">Intermediate states of transactions are invisible to other transactions</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">Durability</td>
                      <td className="px-4 py-2">Once committed, transaction changes are permanent even after system failure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )
        },
        {
          title: "Transaction Commands",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li><strong>BEGIN/START TRANSACTION</strong>: Starts a new transaction.</li>
                <li><strong>COMMIT</strong>: Saves all transaction changes permanently.</li>
                <li><strong>ROLLBACK</strong>: Undoes all changes in the current transaction.</li>
                <li><strong>SAVEPOINT</strong>: Creates a point within a transaction to roll back to.</li>
                <li><strong>SET TRANSACTION</strong>: Configures transaction properties like isolation level.</li>
              </ul>
              <div className="relative group mb-4">
                <div className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500">
                  <pre className="font-mono text-sm">
                    <code>{`-- Basic transaction
BEGIN;
  UPDATE accounts SET balance = balance - 100 WHERE id = 1;
  UPDATE accounts SET balance = balance + 100 WHERE id = 2;
  -- More statements...
COMMIT;  -- Or ROLLBACK if something went wrong

-- Transaction with savepoints
BEGIN;
  INSERT INTO orders (customer_id, amount) VALUES (123, 99.99);
  SAVEPOINT order_created;
  
  UPDATE inventory SET quantity = quantity - 1 WHERE product_id = 456;
  -- If inventory update fails:
  ROLLBACK TO order_created;
  
  -- Else:
  COMMIT;

-- Setting transaction isolation level
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
BEGIN;
  -- Transaction statements...
COMMIT;`}</code>
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`-- Basic transaction
BEGIN;
  UPDATE accounts SET balance = balance - 100 WHERE id = 1;
  UPDATE accounts SET balance = balance + 100 WHERE id = 2;
  -- More statements...
COMMIT;  -- Or ROLLBACK if something went wrong

-- Transaction with savepoints
BEGIN;
  INSERT INTO orders (customer_id, amount) VALUES (123, 99.99);
  SAVEPOINT order_created;
  
  UPDATE inventory SET quantity = quantity - 1 WHERE product_id = 456;
  -- If inventory update fails:
  ROLLBACK TO order_created;
  
  -- Else:
  COMMIT;

-- Setting transaction isolation level
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
BEGIN;
  -- Transaction statements...
COMMIT;`, 'transactions')}
                  className={`absolute top-3 right-3 px-3 py-1 rounded text-sm font-medium flex items-center ${copiedIndex === 'transactions' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    } transition-colors`}
                >
                  <FaCopy className="w-3 h-3 mr-1" />
                  {copiedIndex === 'transactions' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </>
          )
        },
        {
          title: "Transaction Isolation Levels",
          content: (
            <>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Defines how transaction changes are visible to other transactions.</li>
                <li>Higher isolation levels reduce anomalies but decrease concurrency.</li>
                <li>Common isolation levels (from lowest to highest): READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE.</li>
              </ul>
              <div className="overflow-x-auto my-6 rounded-lg shadow">
                <table className="min-w-full">
                  <thead className="bg-purple-600 text-white">
                    <tr>
                      <th className="px-4 py-2">LEVEL</th>
                      <th className="px-4 py-2">DIRTY READS</th>
                      <th className="px-4 py-2">NON-REPEATABLE READS</th>
                      <th className="px-4 py-2">PHANTOM READS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">READ UNCOMMITTED</td>
                      <td className="px-4 py-2">Possible</td>
                      <td className="px-4 py-2">Possible</td>
                      <td className="px-4 py-2">Possible</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">READ COMMITTED</td>
                      <td className="px-4 py-2">Not possible</td>
                      <td className="px-4 py-2">Possible</td>
                      <td className="px-4 py-2">Possible</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">REPEATABLE READ</td>
                      <td className="px-4 py-2">Not possible</td>
                      <td className="px-4 py-2">Not possible</td>
                      <td className="px-4 py-2">Possible</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-4 py-2">SERIALIZABLE</td>
                      <td className="px-4 py-2">Not possible</td>
                      <td className="px-4 py-2">Not possible</td>
                      <td className="px-4 py-2">Not possible</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded-r-lg">
                <div className="flex items-start">
                  <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-800">Isolation Level Tradeoffs:</p>
                    <p className="text-blue-700">Higher isolation levels (like SERIALIZABLE) prevent more anomalies but reduce concurrency and performance. Most databases use READ COMMITTED as the default as it provides a good balance.</p>
                  </div>
                </div>
              </div>
            </>
          )
        }
      ]
    }
  };

  // Menu items data
  const menuItems = [
    { id: 'introduction', label: 'Introduction', icon: <FaDatabase className="mr-2" /> },
    { id: 'data-types', label: 'Data Types', icon: <FaTable className="mr-2" /> },
    {
      id: 'commands',
      label: 'SQL Commands',
      icon: <FaCode className="mr-2" />,
      subItems: [
        { id: 'ddl', label: 'DDL' },
        { id: 'dql', label: 'DQL' },
        { id: 'dml', label: 'DML' },
        // { id: 'dcl', label: 'DCL' },
        // { id: 'tcl', label: 'TCL' }
      ]
    },
    { id: 'joins', label: 'Joins', icon: <FaLink className="mr-2" /> },
    { id: 'subqueries', label: 'Subqueries', icon: <FaCode className="mr-2" /> },
    { id: 'window-functions', label: 'Window Functions', icon: <FaTable className="mr-2" /> },
    { id: 'constraints', label: 'Constraints', icon: <FaLock className="mr-2" /> },
    { id: 'indexes', label: 'Indexes', icon: <FaSearch className="mr-2" /> },
    { id: 'transactions', label: 'Transactions', icon: <FaExchangeAlt className="mr-2" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 w-full">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Sidebar toggle button */}
          <button
            onClick={toggleSidebar}
            className="flex items-center space-x-2 bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md"
          >
            <FaBars className="text-xl" />
            <span className="hidden sm:inline-block">Menu</span>
          </button>

          {/* Main title */}
          <h1 className="text-2xl md:text-3xl font-bold flex items-center space-x-3">
            <FaDatabase className="w-8 h-8" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-white">
              SQL Notes
            </span>
          </h1>

          {/* Back button */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md"
          >
            <FaArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline-block">Back</span>
          </button>
        </div>
      </header>

      {/* Main content area */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside
          id="sidebar"
          className={`${sidebarOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0 transition-all duration-300 ease-in-out`}
        >
          <nav className="bg-white rounded-xl shadow-lg p-4 sticky top-6 transition-all duration-300 hover:shadow-xl border border-purple-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl text-purple-800 flex items-center">
                <FaDatabase className="mr-2 text-purple-600" /> SQL Topics
              </h2>
              <button
                onClick={toggleSidebar}
                className="md:hidden text-gray-500 hover:text-purple-700 text-xl transition-colors duration-200"
              >
                <FaTimes />
              </button>
            </div>

            {/* Menu items */}
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.id)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200 flex justify-between items-center group"
                      >
                        <div className="flex items-center">
                          {React.cloneElement(item.icon, { className: "mr-2 text-purple-600 group-hover:text-purple-700 transition-colors" })}
                          {item.label}
                        </div>
                        {activeSubmenu === item.id ? (
                          <FaChevronUp className="w-4 h-4 transition-transform duration-200 text-gray-500 group-hover:text-purple-700" />
                        ) : (
                          <FaChevronDown className="w-4 h-4 transition-transform duration-200 text-gray-500 group-hover:text-purple-700" />
                        )}
                      </button>
                      <ul className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${activeSubmenu === item.id ? 'max-h-96' : 'max-h-0'}`}>
                        {item.subItems.map((subItem) => (
                          <li key={subItem.id}>
                            <a
                              href={`#${subItem.id}`}
                              className="block px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200 text-sm flex items-center"
                              onClick={() => window.innerWidth <= 768 && setSidebarOpen(false)}
                            >
                              <span className="w-2 h-2 rounded-full bg-purple-300 mr-2 transition-all duration-200 group-hover:bg-purple-500"></span>
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a
                      href={`#${item.id}`}
                      className="block px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200 flex items-center group"
                      onClick={() => window.innerWidth <= 768 && setSidebarOpen(false)}
                    >
                      {React.cloneElement(item.icon, { className: "mr-2 text-purple-600 group-hover:text-purple-700 transition-colors" })}
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 w-100">
          {/* Introduction Section */}
          <section id="introduction" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-100">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaDatabase className="mr-3" /> {sqlData.introduction.title}
                </h2>
              </div>

              <div className="p-6">
                {sqlData.introduction.cards.map((card, index) => (
                  <div key={index} className="card bg-white rounded-lg border border-purple-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-purple-700">{card.title}</h3>
                    <div className="text-gray-700 leading-relaxed">
                      {typeof card.content === 'string' ? <p>{card.content}</p> : card.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Data Types Section */}
          <section id="data-types" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-100">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaTable className="mr-3" /> {sqlData.dataTypes.title}
                </h2>
              </div>

              <div className="p-6">
                {sqlData.dataTypes.cards.map((card, index) => (
                  <div key={index} className="card bg-white rounded-lg border border-purple-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-purple-700">{card.title}</h3>
                    <div className="text-gray-700 leading-relaxed">
                      {typeof card.content === 'string' ? <p>{card.content}</p> : card.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SQL Commands Section */}
          <section id="commands" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-100">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaCode className="mr-3" /> {sqlData.commands.title}
                </h2>
              </div>

              <div className="p-6">
                {sqlData.commands.cards.map((card, index) => (
                  <div key={index} className="card bg-white rounded-lg border border-purple-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-purple-700">{card.title}</h3>
                    <div className="text-gray-700 leading-relaxed">
                      {typeof card.content === 'string' ? <p>{card.content}</p> : card.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DDL Section */}
          <section id="ddl" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-100">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaCode className="mr-3" /> {sqlData.ddl.title}
                </h2>
              </div>

              <div className="p-6">
                {sqlData.ddl.cards.map((card, index) => (
                  <div key={index} className="card bg-white rounded-lg border border-purple-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-purple-700">{card.title}</h3>
                    <div className="text-gray-700 leading-relaxed">
                      {typeof card.content === 'string' ? <p>{card.content}</p> : card.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DML Section */}
          <section id="dml" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-100">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaExchangeAlt className="mr-3" /> {sqlData.dml.title}
                </h2>
              </div>

              <div className="p-6">
                {sqlData.dml.cards.map((card, index) => (
                  <div key={index} className="card bg-white rounded-lg border border-purple-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-purple-700">{card.title}</h3>
                    <div className="text-gray-700 leading-relaxed">
                      {typeof card.content === 'string' ? <p>{card.content}</p> : card.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DQL Section */}
          <section id="dql" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-100">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaSearch className="mr-3" /> {sqlData.dql.title}
                </h2>
              </div>

              <div className="p-6">
                {sqlData.dql.cards.map((card, index) => (
                  <div key={index} className="card bg-white rounded-lg border border-purple-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-purple-700">{card.title}</h3>
                    <div className="text-gray-700 leading-relaxed">
                      {typeof card.content === 'string' ? <p>{card.content}</p> : card.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Joins Section */}
          <section id="joins" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-100">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaLink className="mr-3" /> {sqlData.joins.title}
                </h2>
              </div>

              <div className="p-6">
                {sqlData.joins.cards.map((card, index) => (
                  <div key={index} className="card bg-white rounded-lg border border-purple-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-purple-700">{card.title}</h3>
                    <div className="text-gray-700 leading-relaxed">
                      {typeof card.content === 'string' ? <p>{card.content}</p> : card.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Subqueries Section */}
          <section id="subqueries" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-100">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaCode className="mr-3" /> {sqlData.subqueries.title}
                </h2>
              </div>

              <div className="p-6">
                {sqlData.subqueries.cards.map((card, index) => (
                  <div key={index} className="card bg-white rounded-lg border border-purple-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-purple-700">{card.title}</h3>
                    <div className="text-gray-700 leading-relaxed">
                      {typeof card.content === 'string' ? <p>{card.content}</p> : card.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Window Functions Section */}
          <section id="window-functions" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-100">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaTable className="mr-3" /> {sqlData.windowFunctions.title}
                </h2>
              </div>

              <div className="p-6">
                {sqlData.windowFunctions.cards.map((card, index) => (
                  <div key={index} className="card bg-white rounded-lg border border-purple-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-purple-700">{card.title}</h3>
                    <div className="text-gray-700 leading-relaxed">
                      {typeof card.content === 'string' ? <p>{card.content}</p> : card.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Constraints Section */}
          <section id="constraints" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-100">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaLock className="mr-3" /> {sqlData.constraints.title}
                </h2>
              </div>

              <div className="p-6">
                {sqlData.constraints.cards.map((card, index) => (
                  <div key={index} className="card bg-white rounded-lg border border-purple-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-purple-700">{card.title}</h3>
                    <div className="text-gray-700 leading-relaxed">
                      {typeof card.content === 'string' ? <p>{card.content}</p> : card.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Indexes Section */}
          <section id="indexes" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-100">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaSearch className="mr-3" /> {sqlData.indexes.title}
                </h2>
              </div>

              <div className="p-6">
                {sqlData.indexes.cards.map((card, index) => (
                  <div key={index} className="card bg-white rounded-lg border border-purple-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-purple-700">{card.title}</h3>
                    <div className="text-gray-700 leading-relaxed">
                      {typeof card.content === 'string' ? <p>{card.content}</p> : card.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Transactions Section */}
          <section id="transactions" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-100">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaExchangeAlt className="mr-3" /> {sqlData.transactions.title}
                </h2>
              </div>

              <div className="p-6">
                {sqlData.transactions.cards.map((card, index) => (
                  <div key={index} className="card bg-white rounded-lg border border-purple-100 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-purple-700">{card.title}</h3>
                    <div className="text-gray-700 leading-relaxed">
                      {typeof card.content === 'string' ? <p>{card.content}</p> : card.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default SQL;