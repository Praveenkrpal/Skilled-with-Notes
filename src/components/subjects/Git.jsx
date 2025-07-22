import React, { useState, useEffect } from 'react';
import { FaCodeBranch, FaGithub, FaGitAlt, FaTerminal, FaCopy, FaCheck, FaExclamationTriangle, FaLightbulb, FaLink, FaServer, FaUsers, FaCode, FaHistory, FaTag, FaCloudUploadAlt, FaExchangeAlt, FaSearch, FaShieldAlt, FaRegStar, FaRegDotCircle, FaRegBookmark, FaRegEye, FaRegComments, FaRegChartBar, FaRegBell, FaRegCalendarAlt, FaRegClone, FaRegFileAlt, FaRegFolder, FaRegEnvelope } from 'react-icons/fa';
import { FiClock, FiCode, FiGitBranch, FiGitCommit, FiGitPullRequest, FiGitMerge, FiSettings, FiUser, FiLock, FiDownload, FiUpload, FiTrash2, FiEdit, FiPlus, FiMinus, FiRefreshCw, FiExternalLink } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function Git() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [copiedCode, setCopiedCode] = useState('');
  const [activeSection, setActiveSection] = useState('git-introduction');

  // Intersection observer for sections
  const [introRef, introInView] = useInView({ threshold: 0.1 });
  const [basicsRef, basicsInView] = useInView({ threshold: 0.1 });
  const [workflowRef, workflowInView] = useInView({ threshold: 0.1 });
  const [branchingRef, branchingInView] = useInView({ threshold: 0.1 });
  const [remoteRef, remoteInView] = useInView({ threshold: 0.1 });
  const [collabRef, collabInView] = useInView({ threshold: 0.1 });
  const [advancedRef, advancedInView] = useInView({ threshold: 0.1 });
  const [githubRef, githubInView] = useInView({ threshold: 0.1 });
  const [workflowsRef, workflowsInView] = useInView({ threshold: 0.1 });
  const [securityRef, securityInView] = useInView({ threshold: 0.1 });
  const [bestPracticesRef, bestPracticesInView] = useInView({ threshold: 0.1 });
  const [troubleshootingRef, troubleshootingInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const sections = [
      { id: 'git-introduction', inView: introInView },
      { id: 'git-basics', inView: basicsInView },
      { id: 'git-workflow', inView: workflowInView },
      { id: 'branching', inView: branchingInView },
      { id: 'remote-repos', inView: remoteInView },
      { id: 'collaboration', inView: collabInView },
      { id: 'advanced-git', inView: advancedInView },
      { id: 'github-features', inView: githubInView },
      { id: 'github-workflows', inView: workflowsInView },
      { id: 'security', inView: securityInView },
      { id: 'best-practices', inView: bestPracticesInView },
      { id: 'troubleshooting', inView: troubleshootingInView }
    ];

    const active = sections.find(section => section.inView);
    if (active) {
      setActiveSection(active.id);
    }
  }, [introInView, basicsInView, workflowInView, branchingInView, remoteInView, collabInView, advancedInView, githubInView, workflowsInView, securityInView, bestPracticesInView, troubleshootingInView]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  // Menu items data
  const menuItems = [
    { id: 'git-introduction', label: 'Introduction', icon: <FiClock /> },
    { id: 'git-basics', label: 'Git Basics', icon: <FaGitAlt /> },
    { id: 'git-workflow', label: 'Git Workflow', icon: <FiGitCommit /> },
    { id: 'branching', label: 'Branching', icon: <FiGitBranch /> },
    { id: 'remote-repos', label: 'Remote Repos', icon: <FaServer /> },
    { id: 'collaboration', label: 'Collaboration', icon: <FaUsers /> },
    { id: 'advanced-git', label: 'Advanced Git', icon: <FaCode /> },
    { id: 'github-features', label: 'GitHub Features', icon: <FaGithub /> },
    { id: 'github-workflows', label: 'GitHub Workflows', icon: <FiGitPullRequest /> },
    { id: 'security', label: 'Security', icon: <FaShieldAlt /> },
    { id: 'best-practices', label: 'Best Practices', icon: <FaLightbulb /> },
    { id: 'troubleshooting', label: 'Troubleshooting', icon: <FaExclamationTriangle /> }
  ];

  // Feature cards data
  const features = [
    {
      title: "Version Control",
      description: "Track changes to files over time with complete history",
      icon: <FaHistory className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Distributed System",
      description: "Every developer has full repository history locally",
      icon: <FaCodeBranch className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Branching & Merging",
      description: "Isolate development work without affecting main codebase",
      icon: <FiGitMerge className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Staging Area",
      description: "Precisely control what goes into each commit",
      icon: <FaTerminal className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Collaboration",
      description: "Multiple developers can work on the same project efficiently",
      icon: <FaUsers className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Open Source",
      description: "Free and open-source with strong community support",
      icon: <FaGithub className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Integrations",
      description: "Works with IDEs, CI/CD tools, and other development tools",
      icon: <FaLink className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
    },
    {
      title: "Performance",
      description: "Optimized for speed even with large repositories",
      icon: <FiCode className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
    }
  ];

  // Git Examples
  const gitExamples = {
    basicCommands: `# Initialize a new Git repository
git init

# Clone an existing repository
git clone https://github.com/user/repo.git

# Check the status of your repository
git status

# Add files to staging area
git add filename.txt
git add .  # Add all files

# Commit changes
git commit -m "Initial commit"

# View commit history
git log
git log --oneline --graph --all  # Compact view with branch visualization`,

    branching: `# Create a new branch
git branch feature-branch

# Switch to a branch
git checkout feature-branch
git switch feature-branch  # Newer alternative

# Create and switch to a new branch
git checkout -b new-feature
git switch -c new-feature  # Newer alternative

# List all branches
git branch
git branch -a  # Include remote branches

# Merge a branch
git checkout main
git merge feature-branch

# Delete a branch
git branch -d feature-branch  # Safe delete
git branch -D feature-branch  # Force delete`,

    remoteRepos: `# Add a remote repository
git remote add origin https://github.com/user/repo.git

# List remote repositories
git remote -v

# Push changes to remote
git push -u origin main  # First push
git push  # Subsequent pushes

# Pull changes from remote
git pull origin main

# Fetch changes without merging
git fetch origin

# View remote branches
git branch -r`,

    collaboration: `# Fork a repository on GitHub
# (Done through GitHub UI)

# Clone your fork
git clone https://github.com/your-username/repo.git

# Add upstream repository
git remote add upstream https://github.com/original-owner/repo.git

# Sync your fork with upstream
git fetch upstream
git checkout main
git merge upstream/main

# Create a pull request
# (Done through GitHub UI after pushing changes to your fork)`,

    advancedCommands: `# Stash changes temporarily
git stash
git stash list
git stash apply

# View differences
git diff
git diff --staged
git diff branch1..branch2

# Rewrite commit history
git rebase main
git rebase -i HEAD~3  # Interactive rebase

# Cherry-pick a commit
git cherry-pick abc1234

# Reset changes
git reset --soft HEAD~1  # Undo commit but keep changes
git reset --hard HEAD~1  # Completely undo commit and changes

# Revert a commit
git revert abc1234  # Creates new commit undoing changes

# Clean untracked files
git clean -fd`,

    githubFeatures: `# GitHub CLI commands (gh)
gh repo clone user/repo
gh pr create
gh issue list

# GitHub Actions workflow example
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - run: npm install
    - run: npm test`,

    security: `# Sign commits with GPG
git config --global commit.gpgsign true
git config --global user.signingkey YOUR_GPG_KEY_ID

# Audit repository for secrets
# Use tools like:
# - git-secrets (AWS)
# - truffleHog
# - GitHub's secret scanning

# Update dependencies with known vulnerabilities
# Use GitHub Dependabot or similar tools`,

    workflows: `# Git Flow workflow
git flow init
git flow feature start new-feature
git flow feature finish new-feature
git flow release start 1.0.0
git flow release finish 1.0.0

# GitHub Flow (simpler alternative)
1. Create a branch
2. Add commits
3. Open a pull request
4. Discuss and review code
5. Deploy for testing
6. Merge to main`,

    bestPractices: `# Commit Message Guidelines
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>

# Common commit types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Formatting, missing semicolons, etc.
- refactor: Code refactoring
- test: Adding missing tests
- chore: Maintenance tasks

# Branch Naming Conventions
- feature/<name> - For new features
- bugfix/<name> - For bug fixes
- hotfix/<name> - For critical production fixes
- release/<version> - For release preparation`,

    troubleshooting: `# Common Git Issues and Solutions

# Recover deleted branch
git reflog
git checkout -b branch-name commit-hash

# Undo last commit (keeping changes)
git reset --soft HEAD~1

# Undo last commit (discarding changes)
git reset --hard HEAD~1

# Fix detached HEAD state
git checkout branch-name

# Remove untracked files
git clean -fd

# Fix merge conflicts
1. Open conflicted files
2. Resolve conflicts (keep what you want)
3. Mark as resolved: git add file
4. Complete merge: git commit

# Fix incorrect email in commits
git filter-branch --commit-filter '
  if [ "$GIT_AUTHOR_EMAIL" = "old@email.com" ];
  then
    GIT_AUTHOR_NAME="Your Name";
    GIT_AUTHOR_EMAIL="new@email.com";
    git commit-tree "$@";
  else
    git commit-tree "$@";
  fi' HEAD`
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const hoverEffect = {
    scale: 1.02,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    transition: { duration: 0.3 }
  };

  const tapEffect = {
    scale: 0.98
  };

  // GitHub features data
  const githubFeatures = [
    {
      title: "Repositories",
      description: "Store your project's code, documentation, and other files",
      icon: <FaRegBookmark className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Pull Requests",
      description: "Propose changes and discuss them before merging",
      icon: <FiGitPullRequest className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Issues",
      description: "Track bugs, enhancements, and other tasks",
      icon: <FaRegDotCircle className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Actions",
      description: "Automate workflows with CI/CD pipelines",
      icon: <FaExchangeAlt className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Projects",
      description: "Organize and prioritize work with project boards",
      icon: <FaRegChartBar className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Wiki",
      description: "Create documentation for your project",
      icon: <FaRegFileAlt className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Packages",
      description: "Publish and share packages with your team",
      icon: <FaRegClone className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Codespaces",
      description: "Cloud-powered development environments",
      icon: <FiCode className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Discussions",
      description: "Community conversations outside issues",
      icon: <FaRegComments className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Notifications",
      description: "Stay updated on project activity",
      icon: <FaRegBell className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Stars",
      description: "Bookmark repositories you find interesting",
      icon: <FaRegStar className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Gists",
      description: "Share code snippets and notes",
      icon: <FaRegFileAlt className="w-5 h-5 text-blue-500" />
    }
  ];

  // Security best practices
  const securityPractices = [
    {
      title: "Commit Signing",
      description: "Sign commits with GPG to verify authenticity",
      icon: <FiLock className="w-5 h-5 text-green-500" />
    },
    {
      title: "2FA",
      description: "Enable two-factor authentication on GitHub",
      icon: <FaShieldAlt className="w-5 h-5 text-green-500" />
    },
    {
      title: "Token Management",
      description: "Use personal access tokens instead of passwords",
      // icon: <FiKey className="w-5 h-5 text-green-500" />
    },
    {
      title: "Secret Scanning",
      description: "Detect and prevent secret leaks in repositories",
      icon: <FaSearch className="w-5 h-5 text-green-500" />
    },
    {
      title: "Dependency Updates",
      description: "Keep dependencies updated to patch vulnerabilities",
      icon: <FiDownload className="w-5 h-5 text-green-500" />
    },
    {
      title: "Code Review",
      description: "Require pull request reviews before merging",
      icon: <FaRegEye className="w-5 h-5 text-green-500" />
    },
    {
      title: "Branch Protection",
      description: "Protect important branches from direct pushes",
      icon: <FiLock className="w-5 h-5 text-green-500" />
    },
    {
      title: "Security Policy",
      description: "Create a SECURITY.md file for reporting vulnerabilities",
      icon: <FaRegFileAlt className="w-5 h-5 text-green-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 w-full">
      {/* Header with animation */}
      <motion.header
        className="bg-gradient-to-r from-orange-700 to-red-700 text-white shadow-lg w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
          <motion.button
            onClick={toggleSidebar}
            className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05, backgroundColor: "#c2410c" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="hidden sm:inline-block">Menu</span>
          </motion.button>

          <motion.h1
            className="text-2xl md:text-3xl font-bold flex items-center space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
            >
              <FaGitAlt className="w-8 h-8" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-white">
              Git & GitHub Notes
            </span>
          </motion.h1>
          <Link to="/notes">
            <motion.button
              className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md"
              whileHover={{ x: -5, backgroundColor: "#c2410c" }}
              whileTap={tapEffect}
            >
              <span className="hidden sm:inline-block">Back</span>
            </motion.button>
          </Link>
        </div>
      </motion.header>

      {/* Main content */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6 max-w-6xl">
        {/* Sidebar with animation */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.aside
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="w-full md:w-64 flex-shrink-0"
            >
              <nav className="bg-white rounded-xl shadow-lg p-4 sticky top-6 transition-all duration-300 hover:shadow-xl border border-orange-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-xl text-gray-800 flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <FaGitAlt className="text-orange-600" />
                    </motion.div>
                    Git Topics
                  </h2>
                  <button
                    onClick={toggleSidebar}
                    className="md:hidden text-gray-500 hover:text-gray-700 text-xl transition-colors duration-200 transform hover:rotate-90"
                  >
                    ×
                  </button>
                </div>
                <ul className="space-y-1">
                  {menuItems.map((item) => (
                    <motion.li
                      key={item.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <a
                        href={`#${item.id}`}
                        className={`block px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-800 transition-all duration-200 flex items-center group ${activeSection === item.id ? 'bg-orange-100 text-orange-800 font-medium border-l-4 border-orange-500' : 'text-gray-700'}`}
                      >
                        {React.cloneElement(item.icon, { className: `mr-2 text-orange-600 group-hover:text-orange-800 transition-colors ${activeSection === item.id ? 'text-orange-800' : ''}` })}
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main content area */}
        <main className="flex-1 w-auto">
          {/* Introduction Section */}
          <section id="git-introduction" className="mb-12" ref={introRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-orange-200 hover:border-orange-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={hoverEffect}
            >
              <div className="bg-gradient-to-r from-orange-700 to-red-700 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FiClock className="mr-3" />
                  </motion.div>
                  Introduction to Git & GitHub
                </h2>
              </div>

              <div className="p-6">
                {/* What is Git card */}
                <motion.div
                  className="card bg-white rounded-lg border border-orange-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FaLightbulb className="mr-2 text-orange-400" /> What is Git?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It allows multiple developers to work together and track changes to source code over time.
                  </p>

                  {/* Note box with animation */}
                  <motion.div
                    className="note bg-orange-50 border-l-4 border-orange-400 p-4 mb-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <FaExclamationTriangle className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-orange-800">History:</p>
                        <p className="text-orange-700">Git was created by Linus Torvalds in 2005 for development of the Linux kernel. It's now the most widely used version control system.</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* What is GitHub */}
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center mt-6">
                    <FaLightbulb className="mr-2 text-red-500" /> What is GitHub?
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    GitHub is a cloud-based hosting service for Git repositories. It provides a web interface to Git repositories along with additional features like collaboration tools, issue tracking, and project management.
                  </p>

                  {/* Key Features card */}
                  <motion.div
                    className="card bg-white rounded-lg border border-orange-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-400"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FiCode className="mr-2 text-orange-500" />
                      </motion.div>
                      Key Features
                    </h3>
                    <motion.ul
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {features.map((feature, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg transition-all duration-200 hover:bg-orange-100 hover:shadow-md"
                          whileHover={{ y: -3 }}
                        >
                          {feature.icon}
                          <div>
                            <strong className="font-semibold text-gray-800">{feature.title}:</strong>
                            <span className="text-gray-700"> {feature.description}</span>
                          </div>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Git Basics Section */}
          <section id="git-basics" className="mb-12" ref={basicsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-orange-200 hover:border-orange-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={hoverEffect}
            >
              <div className="bg-gradient-to-r from-orange-700 to-red-700 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaGitAlt className="mr-3" /> Git Basics
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-orange-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FaGitAlt className="mr-2 text-orange-600" /> Basic Git Commands
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    These are the fundamental commands you'll use in almost every Git workflow. Mastering these will allow you to perform most version control tasks.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-orange-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{gitExamples.basicCommands}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(gitExamples.basicCommands)}
                      className="absolute top-3 right-3 bg-orange-600 hover:bg-orange-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                      whileTap={tapEffect}
                    >
                      {copiedCode === gitExamples.basicCommands ? (
                        <>
                          <FaCheck className="w-4 h-4 mr-1" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <FaCopy className="w-4 h-4 mr-1" />
                          Copy
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Git states */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Git File States</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { 
                        icon: <FiCode className="text-orange-500" />, 
                        title: "Working Directory", 
                        description: "Files as they exist on your filesystem",
                        details: "Files can be modified, added, or deleted"
                      },
                      { 
                        icon: <FiCode className="text-orange-500" />, 
                        title: "Staging Area", 
                        description: "Files prepared for the next commit",
                        details: "Use 'git add' to stage changes"
                      },
                      { 
                        icon: <FiCode className="text-orange-500" />, 
                        title: "Repository", 
                        description: "Committed changes stored in Git database",
                        details: "Use 'git commit' to save changes permanently"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-orange-50 p-4 rounded-lg border border-orange-200 hover:border-orange-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-gray-700 mb-2">{item.description}</p>
                        <p className="text-xs text-gray-600">{item.details}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Tip box */}
                  <motion.div
                    className="tip bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaLightbulb className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-red-800">Best Practice:</p>
                        <p className="text-red-700">Commit often with descriptive messages. Each commit should represent a single logical change. Use the imperative mood in commit messages ("Add feature" not "Added feature").</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Git Workflow Section */}
          <section id="git-workflow" className="mb-12" ref={workflowRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-orange-200 hover:border-orange-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={hoverEffect}
            >
              <div className="bg-gradient-to-r from-orange-700 to-red-700 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiGitCommit className="mr-3" /> Git Workflow
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-orange-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FiGitCommit className="mr-2 text-orange-600" /> Basic Git Workflow
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    The typical Git workflow involves these steps: modify files, stage changes, commit changes, and push to a remote repository.
                  </p>

                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex flex-col md:flex-row items-center justify-center mb-6">
                      {[
                        { step: "1", title: "Modify", icon: <FiEdit className="text-orange-500" />, color: "from-orange-400 to-orange-500" },
                        { step: "2", title: "Stage", icon: <FiPlus className="text-orange-500" />, color: "from-orange-500 to-orange-600" },
                        { step: "3", title: "Commit", icon: <FiGitCommit className="text-orange-500" />, color: "from-orange-600 to-orange-700" },
                        { step: "4", title: "Push", icon: <FiUpload className="text-orange-500" />, color: "from-orange-700 to-orange-800" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="flex flex-col items-center mx-2 my-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${item.color} text-white font-bold mb-2 shadow-md`}>
                            {item.step}
                          </div>
                          <div className="flex items-center">
                            {item.icon}
                            <span className="ml-1 font-medium text-gray-700">{item.title}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Workflow diagram */}
                  <motion.div
                    className="bg-orange-50 p-4 rounded-lg border border-orange-200 mb-6"
                    whileHover={{ y: -3 }}
                  >
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Detailed Workflow</h4>
                    <div className="space-y-4">
                      {[
                        { 
                          title: "Initialize Repository", 
                          command: "git init", 
                          description: "Create a new Git repository in your project directory" 
                        },
                        { 
                          title: "Check Status", 
                          command: "git status", 
                          description: "See which files are modified, staged, or untracked" 
                        },
                        { 
                          title: "Stage Changes", 
                          command: "git add .", 
                          description: "Prepare all changes for the next commit" 
                        },
                        { 
                          title: "Commit Changes", 
                          command: "git commit -m 'message'", 
                          description: "Record the staged changes with a descriptive message" 
                        },
                        { 
                          title: "Connect to Remote", 
                          command: "git remote add origin [url]", 
                          description: "Link your local repository to a remote one" 
                        },
                        { 
                          title: "Push Changes", 
                          command: "git push -u origin main", 
                          description: "Upload your commits to the remote repository" 
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                              <span className="text-xs font-bold text-orange-600">{index + 1}</span>
                            </div>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-800">{item.title}</h5>
                            <code className="text-sm bg-gray-100 px-2 py-1 rounded font-mono text-orange-700">{item.command}</code>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Note box */}
                  <motion.div
                    className="note bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <FaExclamationTriangle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-blue-800">Pro Tip:</p>
                        <p className="text-blue-700">Use <code className="bg-blue-100 px-1 rounded">git status</code> frequently to understand the state of your repository. It will show you which changes are staged, unstaged, and untracked.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Branching Section */}
          <section id="branching" className="mb-12" ref={branchingRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-orange-200 hover:border-orange-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={hoverEffect}
            >
              <div className="bg-gradient-to-r from-orange-700 to-red-700 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiGitBranch className="mr-3" /> Branching
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-orange-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FiGitBranch className="mr-2 text-orange-600" /> Git Branching
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Branches allow you to develop features, fix bugs, or safely experiment with new ideas in a contained area of your repository without affecting the main codebase.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-orange-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{gitExamples.branching}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(gitExamples.branching)}
                      className="absolute top-3 right-3 bg-orange-600 hover:bg-orange-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                      whileTap={tapEffect}
                    >
                      {copiedCode === gitExamples.branching ? (
                        <>
                          <FaCheck className="w-4 h-4 mr-1" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <FaCopy className="w-4 h-4 mr-1" />
                          Copy
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Branching strategies */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Branching Strategies</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { 
                        icon: <FiGitBranch className="text-orange-500" />, 
                        title: "Feature Branches", 
                        description: "Create a new branch for each feature",
                        details: "Keeps work isolated until ready to merge"
                      },
                      { 
                        icon: <FiGitBranch className="text-orange-500" />, 
                        title: "Release Branches", 
                        description: "Prepare for a new production release",
                        details: "Allows for last-minute fixes"
                      },
                      { 
                        icon: <FiGitBranch className="text-orange-500" />, 
                        title: "Hotfix Branches", 
                        description: "Fix critical production issues quickly",
                        details: "Branched from main, merged back to main and develop"
                      },
                      { 
                        icon: <FiGitBranch className="text-orange-500" />, 
                        title: "Long-Running Branches", 
                        description: "Branches that exist for extended periods",
                        details: "Common in Git Flow (develop, main, etc.)"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-orange-50 p-4 rounded-lg border border-orange-200 hover:border-orange-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-gray-700 mb-2">{item.description}</p>
                        <p className="text-xs text-gray-600">{item.details}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Merging vs Rebasing */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Merging vs Rebasing</h4>
                  <motion.div
                    className="overflow-x-auto shadow-md rounded-lg mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-orange-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider">
                            Aspect
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider">
                            Merge
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider">
                            Rebase
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { 
                            aspect: "History", 
                            merge: "Preserves complete history with merge commits", 
                            rebase: "Creates linear history by rewriting commits" 
                          },
                          { 
                            aspect: "Use Case", 
                            merge: "Public branches, shared work", 
                            rebase: "Local branches before sharing" 
                          },
                          { 
                            aspect: "Complexity", 
                            merge: "Simple, non-destructive", 
                            rebase: "More complex, rewrites history" 
                          },
                          { 
                            aspect: "Conflict Resolution", 
                            merge: "Resolve conflicts once in merge commit", 
                            rebase: "May need to resolve conflicts for each commit" 
                          },
                          { 
                            aspect: "Best For", 
                            merge: "Merging feature branches to main", 
                            rebase: "Keeping feature branch up-to-date with main" 
                          }
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={index % 2 === 0 ? 'hover:bg-orange-50' : 'bg-orange-50 hover:bg-orange-100'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{row.aspect}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.merge}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.rebase}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>

                  {/* Note box */}
                  <motion.div
                    className="note bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <FaExclamationTriangle className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-orange-800">Golden Rule:</p>
                        <p className="text-orange-700">Never rebase commits that have been pushed to a shared repository. Rebasing rewrites history and can cause problems for other collaborators.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Remote Repositories Section */}
          <section id="remote-repos" className="mb-12" ref={remoteRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-orange-200 hover:border-orange-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={hoverEffect}
            >
              <div className="bg-gradient-to-r from-orange-700 to-red-700 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaServer className="mr-3" /> Remote Repositories
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-orange-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FaServer className="mr-2 text-orange-600" /> Working with Remotes
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Remote repositories are versions of your project hosted on the internet or network somewhere. You can have several of them, each of which is either read-only or read/write for you.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-orange-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{gitExamples.remoteRepos}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(gitExamples.remoteRepos)}
                      className="absolute top-3 right-3 bg-orange-600 hover:bg-orange-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                      whileTap={tapEffect}
                    >
                      {copiedCode === gitExamples.remoteRepos ? (
                        <>
                          <FaCheck className="w-4 h-4 mr-1" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <FaCopy className="w-4 h-4 mr-1" />
                          Copy
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Remote concepts */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Concepts</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { 
                        icon: <FaCloudUploadAlt className="text-orange-500" />, 
                        title: "Origin", 
                        description: "Default name for the remote you cloned from",
                        details: "git push origin main"
                      },
                      { 
                        icon: <FaExchangeAlt className="text-orange-500" />, 
                        title: "Upstream", 
                        description: "Original repository when working with forks",
                        details: "git pull upstream main"
                      },
                      { 
                        icon: <FiDownload className="text-orange-500" />, 
                        title: "Fetch", 
                        description: "Download objects and refs from remote",
                        details: "Doesn't automatically merge"
                      },
                      { 
                        icon: <FiUpload className="text-orange-500" />, 
                        title: "Push", 
                        description: "Upload local branch commits to remote",
                        details: "git push -u origin branch-name"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-orange-50 p-4 rounded-lg border border-orange-200 hover:border-orange-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-gray-700 mb-2">{item.description}</p>
                        <p className="text-xs text-gray-600 font-mono">{item.details}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Remote hosting services */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Popular Git Hosting Services</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { 
                        icon: <FaGithub className="text-gray-800" />, 
                        title: "GitHub", 
                        description: "Most popular with strong community features",
                        link: "https://github.com"
                      },
                      { 
                        icon: <FaGitAlt className="text-orange-600" />, 
                        title: "GitLab", 
                        description: "Strong CI/CD features, self-host option",
                        link: "https://gitlab.com"
                      },
                      { 
                        icon: <FaCodeBranch className="text-blue-500" />, 
                        title: "Bitbucket", 
                        description: "Good for teams using other Atlassian products",
                        link: "https://bitbucket.org"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white p-4 rounded-lg border border-gray-200 hover:border-orange-400 transition-all duration-200 shadow-sm hover:shadow-md"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-gray-700 mb-3">{item.description}</p>
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-orange-600 hover:text-orange-800 flex items-center"
                        >
                          <FiExternalLink className="mr-1" /> Visit
                        </a>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Tip box */}
                  <motion.div
                    className="tip bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaLightbulb className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-purple-800">Pro Tip:</p>
                        <p className="text-purple-700">Use SSH keys instead of HTTPS for authentication with remote repositories. It's more secure and you won't need to enter credentials every time.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Collaboration Section */}
          <section id="collaboration" className="mb-12" ref={collabRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-orange-200 hover:border-orange-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={hoverEffect}
            >
              <div className="bg-gradient-to-r from-orange-700 to-red-700 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaUsers className="mr-3" /> Collaboration
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-orange-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FaUsers className="mr-2 text-orange-600" /> Collaborative Workflows
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Git enables powerful collaboration workflows that allow multiple developers to work on the same project simultaneously without stepping on each other's toes.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-orange-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{gitExamples.collaboration}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(gitExamples.collaboration)}
                      className="absolute top-3 right-3 bg-orange-600 hover:bg-orange-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                      whileTap={tapEffect}
                    >
                      {copiedCode === gitExamples.collaboration ? (
                        <>
                          <FaCheck className="w-4 h-4 mr-1" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <FaCopy className="w-4 h-4 mr-1" />
                          Copy
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Collaboration models */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Collaboration Models</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { 
                        icon: <FaUsers className="text-orange-500" />, 
                        title: "Shared Repository", 
                        description: "Team members push to the same repository",
                        details: "Good for small teams with high trust"
                      },
                      { 
                        icon: <FaCodeBranch className="text-orange-500" />, 
                        title: "Fork & Pull", 
                        description: "Contributors fork and submit pull requests",
                        details: "Common in open source projects"
                      },
                      { 
                        icon: <FiGitPullRequest className="text-orange-500" />, 
                        title: "Pull Requests", 
                        description: "Propose changes for review before merging",
                        details: "Encourages code review and discussion"
                      },
                      { 
                        icon: <FiGitMerge className="text-orange-500" />, 
                        title: "Code Review", 
                        description: "Mandatory reviews before merging",
                        details: "Improves code quality and knowledge sharing"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-orange-50 p-4 rounded-lg border border-orange-200 hover:border-orange-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-gray-700 mb-2">{item.description}</p>
                        <p className="text-xs text-gray-600">{item.details}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* GitHub collaboration features */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">GitHub Collaboration Features</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { 
                        icon: <FiGitPullRequest className="text-blue-500" />, 
                        title: "Pull Requests", 
                        description: "Discuss and review code changes before merging" 
                      },
                      { 
                        icon: <FaRegComments className="text-blue-500" />, 
                        title: "Code Reviews", 
                        description: "Leave comments on specific lines of code" 
                      },
                      { 
                        icon: <FaRegDotCircle className="text-blue-500" />, 
                        title: "Issues", 
                        description: "Track bugs, enhancements, and tasks" 
                      },
                      { 
                        icon: <FaRegChartBar className="text-blue-500" />, 
                        title: "Projects", 
                        description: "Kanban-style project boards" 
                      },
                      { 
                        icon: <FaRegEye className="text-blue-500" />, 
                        title: "Code Owners", 
                        description: "Define who must review certain files" 
                      },
                      { 
                        icon: <FiLock className="text-blue-500" />, 
                        title: "Branch Protection", 
                        description: "Enforce rules for important branches" 
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-blue-50 p-3 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-gray-800 mb-1 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-xs text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Note box */}
                  <motion.div
                    className="note bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <FaExclamationTriangle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-green-800">Best Practice:</p>
                        <p className="text-green-700">Keep pull requests small and focused. Large PRs are harder to review and more likely to introduce conflicts. Aim for PRs that can be reviewed in under an hour.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Advanced Git Section */}
          <section id="advanced-git" className="mb-12" ref={advancedRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-orange-200 hover:border-orange-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={hoverEffect}
            >
              <div className="bg-gradient-to-r from-orange-700 to-red-700 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaCode className="mr-3" /> Advanced Git
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-orange-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FaCode className="mr-2 text-orange-600" /> Advanced Git Techniques
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    These advanced Git commands and techniques can help you solve complex problems, recover from mistakes, and maintain a clean project history.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-orange-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{gitExamples.advancedCommands}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(gitExamples.advancedCommands)}
                      className="absolute top-3 right-3 bg-orange-600 hover:bg-orange-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                      whileTap={tapEffect}
                    >
                      {copiedCode === gitExamples.advancedCommands ? (
                        <>
                          <FaCheck className="w-4 h-4 mr-1" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <FaCopy className="w-4 h-4 mr-1" />
                          Copy
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Advanced techniques */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Advanced Techniques</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { 
                        icon: <FiRefreshCw className="text-orange-500" />, 
                        title: "Interactive Rebase", 
                        description: "Edit, reorder, or squash commits",
                        command: "git rebase -i HEAD~3"
                      },
                      { 
                        icon: <FaRegFileAlt className="text-orange-500" />, 
                        title: "Stashing", 
                        description: "Temporarily save uncommitted changes",
                        command: "git stash save 'message'"
                      },
                      { 
                        icon: <FaTag className="text-orange-500" />, 
                        title: "Tagging", 
                        description: "Mark specific points in history",
                        command: "git tag -a v1.0 -m 'message'"
                      },
                      { 
                        icon: <FaSearch className="text-orange-500" />, 
                        title: "Bisect", 
                        description: "Find which commit introduced a bug",
                        command: "git bisect start"
                      },
                      { 
                        icon: <FiGitMerge className="text-orange-500" />, 
                        title: "Cherry-pick", 
                        description: "Apply a specific commit to current branch",
                        command: "git cherry-pick abc123"
                      },
                      { 
                        icon: <FiTrash2 className="text-orange-500" />, 
                        title: "Clean", 
                        description: "Remove untracked files from working tree",
                        command: "git clean -fd"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-orange-50 p-4 rounded-lg border border-orange-200 hover:border-orange-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </h5>
                        <p className="text-sm text-gray-700 mb-1">{item.description}</p>
                        <code className="text-xs bg-orange-100 px-2 py-1 rounded font-mono text-orange-700">{item.command}</code>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Reflog explanation */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Git Reflog - Your Safety Net</h4>
                  <motion.div
                    className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6"
                    whileHover={{ y: -3 }}
                  >
                    <p className="text-gray-700 mb-3">
                      The reflog is Git's journal that records when the tips of branches and other references were updated in the local repository. It's your safety net when you've made a mistake.
                    </p>
                    <div className="relative group">
                      <motion.div
                        className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto"
                        whileHover={{ scale: 1.01 }}
                      >
                        <pre className="font-mono text-sm">
                          <code># View reflog\ngit reflog\n\n# Recover a deleted branch\ngit checkout -b recovered-branch abc123</code>
                        </pre>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Warning box */}
                  <motion.div
                    className="note bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <FaExclamationTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-red-800">Warning:</p>
                        <p className="text-red-700">Commands like <code className="bg-red-100 px-1 rounded">git reset --hard</code> and <code className="bg-red-100 px-1 rounded">git clean -fd</code> are destructive and can't be undone. Use with caution!</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* GitHub Features Section */}
          <section id="github-features" className="mb-12" ref={githubRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-orange-200 hover:border-orange-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={hoverEffect}
            >
              <div className="bg-gradient-to-r from-blue-700 to-purple-700 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaGithub className="mr-3" /> GitHub Features
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FaGithub className="mr-2 text-blue-600" /> GitHub Platform Features
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    GitHub provides many features beyond Git repository hosting that enhance collaboration, project management, and automation.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{gitExamples.githubFeatures}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(gitExamples.githubFeatures)}
                      className="absolute top-3 right-3 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                      whileTap={tapEffect}
                    >
                      {copiedCode === gitExamples.githubFeatures ? (
                        <>
                          <FaCheck className="w-4 h-4 mr-1" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <FaCopy className="w-4 h-4 mr-1" />
                          Copy
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* GitHub features grid */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">GitHub Features Overview</h4>
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {githubFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-400 transition-all duration-200 shadow-sm hover:shadow-md"
                        whileHover={{ y: -3 }}
                      >
                        <div className="flex items-center mb-2">
                          {feature.icon}
                          <h5 className="font-semibold text-gray-800 ml-2">{feature.title}</h5>
                        </div>
                        <p className="text-xs text-gray-600">{feature.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* GitHub CLI */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">GitHub CLI</h4>
                  <motion.div
                    className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6"
                    whileHover={{ y: -3 }}
                  >
                    <p className="text-gray-700 mb-3">
                      GitHub CLI brings GitHub to your terminal. It helps you manage pull requests, issues, and other GitHub tasks without leaving the command line.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { command: "gh repo clone owner/repo", description: "Clone a repository" },
                        { command: "gh pr create", description: "Create a pull request" },
                        { command: "gh issue list", description: "List open issues" },
                        { command: "gh gist create file.txt", description: "Create a gist" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="p-3 bg-white rounded border border-blue-100"
                        >
                          <code className="text-sm font-mono text-blue-700">{item.command}</code>
                          <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* GitHub Pages */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">GitHub Pages</h4>
                  <motion.div
                    className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6"
                    whileHover={{ y: -3 }}
                  >
                    <p className="text-gray-700 mb-3">
                      GitHub Pages allows you to turn GitHub repositories into elegant websites to showcase your portfolio, projects, documentation, and more.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { text: "User/Organization Sites", color: "bg-purple-100 text-purple-800" },
                        { text: "Project Sites", color: "bg-purple-100 text-purple-800" },
                        { text: "Jekyll Support", color: "bg-purple-100 text-purple-800" },
                        { text: "Custom Domains", color: "bg-purple-100 text-purple-800" },
                        { text: "HTTPS", color: "bg-purple-100 text-purple-800" }
                      ].map((item, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className={`text-xs px-2 py-1 rounded-full ${item.color}`}
                        >
                          {item.text}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Tip box */}
                  <motion.div
                    className="tip bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-blue-800">Pro Tip:</p>
                        <p className="text-blue-700">Use GitHub's <code className="bg-blue-100 px-1 rounded">.github</code> repository in your organization to create default community health files (like CONTRIBUTING.md, CODE_OF_CONDUCT.md) that will apply to all repositories.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* GitHub Workflows Section */}
          <section id="github-workflows" className="mb-12" ref={workflowsRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-orange-200 hover:border-orange-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={hoverEffect}
            >
              <div className="bg-gradient-to-r from-blue-700 to-purple-700 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FiGitPullRequest className="mr-3" /> GitHub Workflows
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-blue-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FiGitPullRequest className="mr-2 text-blue-600" /> Workflows & CI/CD
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    GitHub provides powerful automation tools to build, test, and deploy your code right from your repository.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{gitExamples.workflows}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(gitExamples.workflows)}
                      className="absolute top-3 right-3 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                      whileTap={tapEffect}
                    >
                      {copiedCode === gitExamples.workflows ? (
                        <>
                          <FaCheck className="w-4 h-4 mr-1" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <FaCopy className="w-4 h-4 mr-1" />
                          Copy
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* GitHub Actions */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">GitHub Actions</h4>
                  <motion.div
                    className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6"
                    whileHover={{ y: -3 }}
                  >
                    <p className="text-gray-700 mb-3">
                      GitHub Actions allows you to automate workflows directly in your repository. You can build, test, and deploy your code right from GitHub.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { 
                          title: "CI/CD Pipelines", 
                          description: "Automate testing and deployment",
                          icon: <FaExchangeAlt className="text-blue-500" />
                        },
                        { 
                          title: "Scheduled Jobs", 
                          description: "Run workflows on a schedule",
                          icon: <FaRegCalendarAlt className="text-blue-500" />
                        },
                        { 
                          title: "Event Triggers", 
                          description: "Run on push, pull request, etc.",
                          icon: <FaRegBell className="text-blue-500" />
                        },
                        { 
                          title: "Marketplace", 
                          description: "Thousands of pre-built actions",
                          icon: <FaRegFolder className="text-blue-500" />
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white p-3 rounded border border-blue-100 flex items-start space-x-3"
                        >
                          <div className="mt-0.5">
                            {item.icon}
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-800">{item.title}</h5>
                            <p className="text-xs text-gray-600">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Workflow examples */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common Workflow Examples</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { 
                        title: "Node.js CI", 
                        description: "Run tests on Node.js projects",
                        yaml: `name: Node.js CI\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v2\n    - uses: actions/setup-node@v2\n    - run: npm install\n    - run: npm test`
                      },
                      { 
                        title: "Docker Build", 
                        description: "Build and push Docker images",
                        yaml: `name: Docker Build\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v2\n    - run: docker build .\n    - run: docker push`
                      },
                      { 
                        title: "Auto Assign", 
                        description: "Automatically assign PR reviewers",
                        yaml: `name: Auto Assign\non: [pull_request]\njobs:\n  assign:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/github-script@v3\n      with:\n        script: |\n          github.issues.addAssignees({\n            issue_number: context.issue.number,\n            assignees: ['user1', 'user2']\n          })`
                      },
                      { 
                        title: "Deploy to AWS", 
                        description: "Deploy to AWS using SAM",
                        yaml: `name: Deploy to AWS\non: [push]\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v2\n    - uses: actions/setup-node@v2\n    - run: npm install -g aws-sam-cli\n    - run: sam deploy`
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-400 transition-all duration-200 shadow-sm hover:shadow-md"
                        whileHover={{ y: -3 }}
                      >
                        <h5 className="font-semibold text-gray-800 mb-2">{item.title}</h5>
                        <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                        <div className="relative">
                          <motion.div
                            className="code-block bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs"
                            whileHover={{ scale: 1.01 }}
                          >
                            <pre className="font-mono">
                              <code>{item.yaml}</code>
                            </pre>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Note box */}
                  <motion.div
                    className="note bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <FaExclamationTriangle className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-purple-800">Pro Tip:</p>
                        <p className="text-purple-700">Use GitHub's <code className="bg-purple-100 px-1 rounded">starter workflows</code> as templates for common CI/CD patterns. They're available when creating a new workflow file in the <code className="bg-purple-100 px-1 rounded">.github/workflows</code> directory.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Security Section */}
          <section id="security" className="mb-12" ref={securityRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-orange-200 hover:border-orange-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={hoverEffect}
            >
              <div className="bg-gradient-to-r from-green-700 to-teal-700 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaShieldAlt className="mr-3" /> Security
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-green-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FaShieldAlt className="mr-2 text-green-600" /> Git & GitHub Security
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Security is crucial when working with version control systems. Follow these practices to keep your code and credentials safe.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-green-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{gitExamples.security}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(gitExamples.security)}
                      className="absolute top-3 right-3 bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                      whileTap={tapEffect}
                    >
                      {copiedCode === gitExamples.security ? (
                        <>
                          <FaCheck className="w-4 h-4 mr-1" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <FaCopy className="w-4 h-4 mr-1" />
                          Copy
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Security practices */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Security Best Practices</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {securityPractices.map((practice, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-green-50 p-4 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <div className="flex items-center mb-2">
                          {practice.icon}
                          <h5 className="font-semibold text-gray-800 ml-2">{practice.title}</h5>
                        </div>
                        <p className="text-sm text-gray-700">{practice.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* GitHub security features */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">GitHub Security Features</h4>
                  <motion.div
                    className="bg-green-50 p-4 rounded-lg border border-green-200 mb-6"
                    whileHover={{ y: -3 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { 
                          title: "Secret Scanning", 
                          description: "Detects and alerts on committed secrets",
                          icon: <FaSearch className="text-green-500" />
                        },
                        { 
                          title: "Dependabot", 
                          description: "Automated dependency updates",
                          icon: <FiDownload className="text-green-500" />
                        },
                        { 
                          title: "Code Scanning", 
                          description: "Find vulnerabilities with CodeQL",
                          icon: <FaCode className="text-green-500" />
                        },
                        { 
                          title: "2FA Enforcement", 
                          description: "Require 2FA for all members",
                          icon: <FaShieldAlt className="text-green-500" />
                        },
                        { 
                          title: "Security Policy", 
                          description: "SECURITY.md file for reporting",
                          icon: <FaRegFileAlt className="text-green-500" />
                        },
                        { 
                          title: "Audit Log", 
                          description: "Track organization activity",
                          icon: <FaHistory className="text-green-500" />
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white p-3 rounded border border-green-100 flex items-start space-x-3"
                        >
                          <div className="mt-0.5">
                            {item.icon}
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-800 text-sm">{item.title}</h5>
                            <p className="text-xs text-gray-600">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Warning box */}
                  <motion.div
                    className="note bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <FaExclamationTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-red-800">Critical:</p>
                        <p className="text-red-700">Never commit sensitive data like passwords, API keys, or credentials to Git. If accidentally committed, rotate the credentials immediately as they remain in the Git history even if removed in later commits.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Best Practices Section */}
          <section id="best-practices" className="mb-12" ref={bestPracticesRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-orange-200 hover:border-orange-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={hoverEffect}
            >
              <div className="bg-gradient-to-r from-purple-700 to-indigo-700 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaLightbulb className="mr-3" /> Best Practices
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FaLightbulb className="mr-2 text-purple-600" /> Git & GitHub Best Practices
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Following these best practices will make your Git workflow more efficient and your repository more maintainable.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-purple-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{gitExamples.bestPractices}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(gitExamples.bestPractices)}
                      className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                      whileTap={tapEffect}
                    >
                      {copiedCode === gitExamples.bestPractices ? (
                        <>
                          <FaCheck className="w-4 h-4 mr-1" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <FaCopy className="w-4 h-4 mr-1" />
                          Copy
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Best practices list */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Git Best Practices</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { 
                        title: "Commit Often", 
                        description: "Small, focused commits are easier to understand and revert",
                        icon: <FiGitCommit className="text-purple-500" />
                      },
                      { 
                        title: "Write Good Messages", 
                        description: "Use imperative mood, explain why not just what",
                        icon: <FaRegFileAlt className="text-purple-500" />
                      },
                      { 
                        title: "Branch Naming", 
                        description: "Use consistent naming like feature/xxx or fix/yyy",
                        icon: <FiGitBranch className="text-purple-500" />
                      },
                      { 
                        title: "Review Before Push", 
                        description: "Check your changes with git diff before pushing",
                        icon: <FaRegEye className="text-purple-500" />
                      },
                      { 
                        title: "Keep History Clean", 
                        description: "Use rebase to maintain linear history when appropriate",
                        icon: <FiRefreshCw className="text-purple-500" />
                      },
                      { 
                        title: "Use .gitignore", 
                        description: "Exclude build artifacts, dependencies, and secrets",
                        icon: <FiSettings className="text-purple-500" />
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <div className="flex items-center mb-2">
                          {item.icon}
                          <h5 className="font-semibold text-gray-800 ml-2">{item.title}</h5>
                        </div>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* GitHub best practices */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">GitHub Best Practices</h4>
                  <motion.div
                    className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6"
                    whileHover={{ y: -3 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { 
                          title: "README Files", 
                          description: "Every repository should have a clear README explaining its purpose",
                          icon: <FaRegBookmark className="text-purple-500" />
                        },
                        { 
                          title: "Issue Templates", 
                          description: "Use templates to standardize bug reports and feature requests",
                          icon: <FaRegFileAlt className="text-purple-500" />
                        },
                        { 
                          title: "Pull Request Templates", 
                          description: "Guide contributors to include necessary information",
                          icon: <FiGitPullRequest className="text-purple-500" />
                        },
                        { 
                          title: "Branch Protection", 
                          description: "Protect main branch with required reviews and status checks",
                          icon: <FiLock className="text-purple-500" />
                        },
                        { 
                          title: "Code Owners", 
                          description: "Define who must review changes to specific files",
                          icon: <FiUser className="text-purple-500" />
                        },
                        { 
                          title: "CI/CD Pipelines", 
                          description: "Automate testing and deployment with GitHub Actions",
                          icon: <FaExchangeAlt className="text-purple-500" />
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white p-3 rounded border border-purple-100 flex items-start space-x-3"
                        >
                          <div className="mt-0.5">
                            {item.icon}
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-800 text-sm">{item.title}</h5>
                            <p className="text-xs text-gray-600">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Documentation checklist */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Repository Documentation Checklist</h4>
                  <motion.div
                    className="bg-white p-4 rounded-lg border border-gray-200 mb-6"
                    whileHover={{ y: -3 }}
                  >
                    <ul className="space-y-3">
                      {[
                        { item: "README.md - Project overview and setup instructions", checked: true },
                        { item: "CONTRIBUTING.md - How to contribute to the project", checked: true },
                        { item: "CODE_OF_CONDUCT.md - Community behavior guidelines", checked: false },
                        { item: "LICENSE - Project license information", checked: true },
                        { item: "CHANGELOG.md - Release history and changes", checked: false },
                        { item: "SECURITY.md - Security policy and reporting", checked: false },
                        { item: "API_DOCS.md - API documentation if applicable", checked: false }
                      ].map((doc, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center"
                        >
                          <input 
                            type="checkbox" 
                            checked={doc.checked} 
                            readOnly 
                            className="mr-3 h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                          />
                          <span className={`text-sm ${doc.checked ? 'text-gray-600' : 'text-gray-400'}`}>
                            {doc.item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Tip box */}
                  <motion.div
                    className="tip bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaLightbulb className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-indigo-800">Pro Tip:</p>
                        <p className="text-indigo-700">Use GitHub's <code className="bg-indigo-100 px-1 rounded">templates</code> feature to create standardized repository templates for your organization. This ensures all new repositories start with your required documentation and configuration.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Troubleshooting Section */}
          <section id="troubleshooting" className="mb-12" ref={troubleshootingRef}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-orange-200 hover:border-orange-400"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={hoverEffect}
            >
              <div className="bg-gradient-to-r from-red-700 to-pink-700 p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <FaExclamationTriangle className="mr-3" /> Troubleshooting
                </h2>
              </div>

              <div className="p-6">
                <motion.div
                  className="card bg-white rounded-lg border border-red-200 p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-red-400"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FaExclamationTriangle className="mr-2 text-red-600" /> Common Git Problems & Solutions
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Even experienced Git users encounter problems. Here are solutions to common issues you might face.
                  </p>

                  <div className="relative group mb-6">
                    <motion.div
                      className="code-block bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto transition-all duration-200 group-hover:ring-2 group-hover:ring-red-500"
                      whileHover={{ scale: 1.01 }}
                    >
                      <pre className="font-mono text-sm">
                        <code>{gitExamples.troubleshooting}</code>
                      </pre>
                    </motion.div>
                    <motion.button
                      onClick={() => copyToClipboard(gitExamples.troubleshooting)}
                      className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm flex items-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                      whileTap={tapEffect}
                    >
                      {copiedCode === gitExamples.troubleshooting ? (
                        <>
                          <FaCheck className="w-4 h-4 mr-1" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <FaCopy className="w-4 h-4 mr-1" />
                          Copy
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Common problems */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common Problems & Solutions</h4>
                  <motion.div
                    className="space-y-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { 
                        problem: "Accidentally committed to wrong branch", 
                        solution: "git checkout correct-branch\ngit cherry-pick commit-hash\ngit checkout wrong-branch\ngit reset --hard HEAD~1",
                        icon: <FiGitBranch className="text-red-500" />
                      },
                      { 
                        problem: "Need to undo last commit (keep changes)", 
                        solution: "git reset --soft HEAD~1",
                        icon: <FiRefreshCw className="text-red-500" />
                      },
                      { 
                        problem: "Need to undo last commit (discard changes)", 
                        solution: "git reset --hard HEAD~1",
                        icon: <FiTrash2 className="text-red-500" />
                      },
                      { 
                        problem: "Detached HEAD state", 
                        solution: "git checkout branch-name",
                        icon: <FaExclamationTriangle className="text-red-500" />
                      },
                      { 
                        problem: "Merge conflict resolution", 
                        solution: "1. Open conflicted files\n2. Resolve conflicts (keep what you want)\n3. git add file\n4. git commit",
                        icon: <FiGitMerge className="text-red-500" />
                      },
                      { 
                        problem: "Pushed sensitive data", 
                        solution: "1. Rotate all exposed credentials immediately\n2. Use git filter-branch or BFG to rewrite history\n3. Force push\n4. Inform all collaborators",
                        icon: <FiLock className="text-red-500" />
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-red-50 p-4 rounded-lg border border-red-200 hover:border-red-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <div className="flex items-start mb-3">
                          {item.icon}
                          <h5 className="font-semibold text-gray-800 ml-2">{item.problem}</h5>
                        </div>
                        <div className="bg-red-100 p-3 rounded overflow-x-auto">
                          <pre className="font-mono text-sm text-red-800 whitespace-pre-wrap">
                            {item.solution}
                          </pre>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* GitHub issues */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Common GitHub Issues</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { 
                        title: "Permission Denied", 
                        description: "Ensure your SSH key is added to GitHub account or use HTTPS with PAT",
                        icon: <FiLock className="text-red-500" />
                      },
                      { 
                        title: "Push Rejected", 
                        description: "Pull remote changes first with git pull --rebase",
                        icon: <FiUpload className="text-red-500" />
                      },
                      { 
                        title: "PR Merge Conflicts", 
                        description: "Fetch upstream and resolve conflicts locally before pushing",
                        icon: <FiGitMerge className="text-red-500" />
                      },
                      { 
                        title: "Actions Fail", 
                        description: "Check workflow logs and ensure all required secrets are set",
                        icon: <FaExchangeAlt className="text-red-500" />
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white p-4 rounded-lg border border-red-200 hover:border-red-400 transition-all duration-200 shadow-sm hover:shadow-md"
                        whileHover={{ y: -3 }}
                      >
                        <div className="flex items-center mb-2">
                          {item.icon}
                          <h5 className="font-semibold text-gray-800 ml-2">{item.title}</h5>
                        </div>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Resources */}
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Helpful Resources</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { 
                        title: "Git Documentation", 
                        url: "https://git-scm.com/doc",
                        icon: <FaRegFileAlt className="text-red-500" />
                      },
                      { 
                        title: "GitHub Help", 
                        url: "https://docs.github.com",
                        icon: <FaGithub className="text-red-500" />
                      },
                      { 
                        title: "Git Flight Rules", 
                        url: "https://github.com/k88hudson/git-flight-rules",
                        icon: <FaExclamationTriangle className="text-red-500" />
                      },
                      { 
                        title: "Oh Shit, Git!", 
                        url: "https://ohshitgit.com",
                        icon: <FaRegComments className="text-red-500" />
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-red-50 p-4 rounded-lg border border-red-200 hover:border-red-400 transition-all duration-200"
                        whileHover={{ y: -3 }}
                      >
                        <div className="flex items-center mb-2">
                          {item.icon}
                          <h5 className="font-semibold text-gray-800 ml-2">{item.title}</h5>
                        </div>
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-red-600 hover:text-red-800 flex items-center"
                        >
                          <FiExternalLink className="mr-1" /> {item.url}
                        </a>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Footer */}
          <motion.footer
            className="bg-gradient-to-r from-orange-700 to-red-700 text-white py-8 rounded-xl shadow-lg mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-xl font-bold flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <FaGitAlt />
                    </motion.div>
                    Git & GitHub Notes
                  </h2>
                  <p className="text-orange-200 mt-1">A comprehensive guide to version control</p>
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    className="text-white hover:text-orange-200 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="sr-only">GitHub</span>
                    <FaGithub className="h-6 w-6" />
                  </motion.a>
                </div>
              </div>
              <div className="mt-8 border-t border-orange-600 pt-8 flex flex-col md:flex-row justify-between">
                <p className="text-orange-200 text-sm">
                  &copy; {new Date().getFullYear()} Git & GitHub Notes. All rights reserved.
                </p>
                <div className="mt-4 md:mt-0">
                  <motion.a
                    href="#"
                    className="text-white hover:text-orange-200 text-sm transition-colors duration-200 mr-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    Privacy Policy
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-white hover:text-orange-200 text-sm transition-colors duration-200 mr-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    Terms of Service
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-white hover:text-orange-200 text-sm transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    Contact
                  </motion.a> 
                </div>
              </div>
            </div>
          </motion.footer>
        </main>
      </div>
    </div>
  );
}